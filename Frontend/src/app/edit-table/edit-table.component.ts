import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { RegisterService } from '../services/register.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})

export class EditTableComponent implements OnInit {
  Employees;
  p=1;
 
  constructor(private _getData:GetDataService,private _service:RegisterService, private _router:Router) { }
  

  ngOnInit(): void {
    this._getData.getEmployees().subscribe
    (
        res=>
        {
          this.Employees=res
          this.Employees.forEach(element => {
            element['isEdit']=false;
          });
         
        },
        err=>
        {
          if(err.status==404)
          {
            this._router.navigate(['/login'])
            localStorage.removeItem("employeeToken")
          }
          console.log(err)
        }
    );
    
  }

  isEdit(Employee)
  {
    Employee.isEdit=true;
  }
  cancel(Employee)
  {
    Employee.isEdit=false;
  }
  update(Employee)
  {
    this._service.updateEmployee(Employee).subscribe
    (
      res=>
      {
         Employee.isEdit=false;
         //Swal.fire('Updated!')
         Swal.fire("Good job!", "Record Updatec Successfully!", "success");
      },
      err=>
      {
        console.log(err)
      }
    )
  }
  delete(Employee)
  {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) 
      {

          this._service.deleteEmployee(Employee).subscribe
          (
              res=>
              {
                
                this.ngOnInit();
              },
            err=>
              {
                console.log(err)
              }
          )

        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    
  }

}
