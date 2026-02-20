import { Component } from '@angular/core';
import { HinduworldService } from '../services/hinduworld.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-hindusworld-organization',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './hindusworld-organization.component.html',
  styleUrl: './hindusworld-organization.component.css'
})
export class HindusworldOrganizationComponent {

 organizations: any[] = [];
   bannerFileList: NzUploadFile[] = [];
searchSubject = new Subject<string>();

selectedOrganization: any = null;
  editMode: boolean = false;
  editForm!: FormGroup;

  constructor(private orgService: HinduworldService,private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadOrganizations();

      this.searchSubject.pipe(
    debounceTime(400),
    distinctUntilChanged()
  ).subscribe(term => {
this.loadOrganizations(term);
  });


        this.editForm = this.fb.group({
      organization_name: [''],
      est_date: [''],
      chairman: [''],
      location: [''],
      mission: [''],
      org_detail: [''],
      web_url: [''],
      est_by:[''],
      sub_category_id:[''],
      category_id:[''],
      status:['']
    });
    this.fetchCategories();
  this.editForm.get('category_id')?.valueChanges.subscribe((mainCategoryId) => {
    if (mainCategoryId) {
      this.fetchSubcategories(mainCategoryId);
    } else {
      this.subcategories = [];
    }
  });
  }

  // loadOrganizations() {
  //   this.orgService.getorganizations().subscribe((res: any) => {
  //     this.organizations = res.results; 
  //   });
  // }

loadOrganizations(search: string = '') {
  this.orgService.getorganizations(search).subscribe((res: any) => {
    this.organizations = res.results;
  });
}


  selectOrganization(id: string) {
  this.orgService.getorganizationsbyid(id).subscribe((res: any) => {
    this.selectedOrganization = res;

    

    this.editForm.patchValue({
      organization_name: res.organization_name,
      est_date: res.est_date,
      chairman: res.chairman,
      location: res.location,
      mission: res.mission,
      org_detail: res.org_detail,
      web_url: res.web_url,
      est_by: res.est_by,
      category_id: res.category_id,
      sub_category_id: res.sub_category_id,
      status:res.status
    });

    if (res.org_images) {
      this.convertToBase64(res.org_images).then((base64: any) => {
        this.profileImage = base64;

        this.editForm.patchValue({
          org_images: base64
        });
      });
    } else {
      this.profileImage = null;
    }

    this.editMode = false;
  });
}


   profileImage: string | ArrayBuffer | null = null;
 org_images: any;

  enableEdit() {
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
  }



  
  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/profile1.webp';
  }

  editOrganization(id: string) {
  // Navigate to edit page OR open form inside same page
  this.router.navigate(['/edit-organization', id]);
}

  updateOrganization() {
    const updatedData = this.editForm.value;

    this.orgService.updateOrganization(this.selectedOrganization._id, updatedData)
      .subscribe((res: any) => {
        alert('Organization updated successfully ✔');

        // this.selectedOrganization = res;
              this.selectOrganization(this.selectedOrganization._id);

        this.editMode = false;
        this.loadOrganizations(); 
      });
  }




    handleBannerFileRemove(file: any): boolean {
      this.bannerFileList = this.bannerFileList.filter(f => f.uid !== file.uid);
      return true;
    }
  
    handleBannerFileChange(info:NzUploadChangeParam):void {
      this.handleUpload(info, 'org_images');
     }
     handleUpload(info: NzUploadChangeParam, formControlName: string): void {
      const fileList = [...info.fileList];
    
      const base64Images: string[] = [];
    
      fileList.forEach((file: NzUploadFile) => {
        this.getBase64(file.originFileObj!, (base64String: string) => {
          file['base64'] = base64String;
          base64Images.push(base64String);
    
          if (base64Images.length === fileList.length) {
            this.editForm.patchValue({ org_images: base64Images });
            console.log('Updated images form:', this.editForm.value);
          }
        });
      });
    
      if (formControlName === 'org_images') {
        this.bannerFileList = fileList;
      }
    
      console.log('File upload:', info.fileList);
    }
  
    getBase64(file: File, callback: (base64String: string) => void): void {
      const reader = new FileReader();
      reader.onload = () => {
          let base64String = reader.result as string;
          base64String = base64String.split(',')[1];
          console.log('Base64 string:', base64String); 
          callback(base64String);
      };
      reader.readAsDataURL(file);
    }


convertToBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";

    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.readAsDataURL(xhr.response);
    };

    xhr.onerror = reject;
    xhr.send();
  });
}



onFileChange(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    const file = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const base64Full = reader.result as string;
      const base64 = base64Full.split(',')[1]; 
      this.profileImage = base64;

      this.editForm.patchValue({
        org_images: base64
      });
    };

    reader.readAsDataURL(file);
  }
}



      triggerFileInput() {
        const fileInput = document.getElementById('org_images') as HTMLElement;
        fileInput.click();
      }

      onImageError(event: any) {
        event.target.src = 'assets/profile1.webp'; 
      }


  mainCategory: any[] = [];
  subcategories: any[] | null = null;


      fetchCategories(): void {
  this.orgService.getCategories().subscribe(
    (res) => {
      if (res && Array.isArray(res)) {
        this.mainCategory = res.map((category: any) => ({
          label: category.name,
          value: category._id,
        }));
        console.log('Main categories populated:', this.mainCategory);
      }
    },
    (err) => {
      console.error('Error fetching main categories:', err);
    }
  );
}

fetchSubcategories(mainCategoryId: string): void {
  this.orgService.getorganizationsubCategories(mainCategoryId).subscribe(
    (res) => {
      if (res && Array.isArray(res)) {
        this.subcategories = res.map((subcategory: any) => ({
          label: subcategory.name,
          value: subcategory._id,
        }));
        console.log('Subcategories populated:', this.subcategories);
      } else {
        this.subcategories = [];
      }
    },
    (err) => {
      console.error('Error fetching subcategories:', err);
      this.subcategories = [];
    }
  );
}

searchTerm: string = '';


onSearchChange(term: string) {
  this.searchTerm = term;
  this.searchSubject.next(term);
}

deleteOrganization(id: string) {
  if (!confirm("Are you sure you want to delete this organization?")) return;

  this.orgService.Deleteorganization(id).subscribe({
    next: () => {
      alert("Organization deleted successfully");
      this.loadOrganizations(); // reload list after delete
    },
    error: (err) => {
      console.error(err);
      alert("Failed to delete organization");
    }
  });
}



}