import { Employee } from 'src/models/employee';
import { EmployeeType } from 'src/models/primitive/employee-type';
import { LaborType } from 'src/models/primitive/labor-type';

export const zach = new Employee();
zach.id = 'Zach';
zach.empType = EmployeeType.Hourly;
zach.laborType = LaborType.Indirect;
zach.hireDate = new Date(2018, 0, 1);
zach.hourlyRate = 15;

export const katie = new Employee();
katie.id = 'Katie';
katie.empType = EmployeeType.Salary;
katie.laborType = LaborType.Direct;
katie.hireDate = new Date(2010, 3, 1);
katie.salaryRate = 150000;

export const scooby = new Employee();
scooby.id = 'Scooby';
scooby.empType = EmployeeType.Hourly;
scooby.laborType = LaborType.Direct;
scooby.hireDate = new Date(2011, 0, 18);
scooby.biWeeklyRate = 300;

export const cole = new Employee();
cole.id = 'Cole';
cole.empType = EmployeeType.Salary;
cole.laborType = LaborType.Indirect;
cole.hireDate = new Date(2012, 0, 1);
cole.monthlyRate = 1000;

// Sample grid
export const exampleEmployees = [katie, zach, cole, scooby];
