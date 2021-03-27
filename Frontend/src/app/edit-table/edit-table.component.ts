import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})

export class EditTableComponent implements OnInit {
  Employees;
 
  constructor(private _getData:GetDataService,private _service:RegisterService) { }
  

  ngOnInit(): void {
    this._getData.getEmployees().subscribe
    (
        res=>
        {
          this.Employees=res
          this.Employees.forEach(element => {
            element['isEdit']=false;
          });
          console.log(this.Employees)
        },
        err=>
        {
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
      },
      err=>
      {
        console.log(err)
      }
    )
  }

}
