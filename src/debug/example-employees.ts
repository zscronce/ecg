import { Employee } from 'src/models/employee';
import { EmployeeType } from 'src/models/employee-type';
import { LaborType } from 'src/models/labor-type';

export const zach = new Employee();
zach.id = 'Zach';
zach.empType = EmployeeType.HOURLY;
zach.laborType = LaborType.INDIRECT;
zach.hireDate = new Date(2018, 0, 1);
zach.hourlyRate = 15;

export const katie = new Employee();
katie.id = 'Katie';
katie.empType = EmployeeType.SALARY;
katie.laborType = LaborType.DIRECT;
katie.hireDate = new Date(2010, 3, 1);
katie.salaryRate = 150000;

export const scooby = new Employee();
scooby.id = 'Scooby';
scooby.empType = EmployeeType.HOURLY;
scooby.laborType = LaborType.DIRECT;
scooby.hireDate = new Date(2011, 0, 18);
scooby.biWeeklyRate = 300;

export const cole = new Employee();
cole.id = 'Cole';
cole.empType = EmployeeType.SALARY;
cole.laborType = LaborType.INDIRECT;
cole.hireDate = new Date(2012, 0, 1);
cole.monthlyRate = 1000;

// Sample grid
export const exampleEmployees = [katie, zach, cole, scooby];
