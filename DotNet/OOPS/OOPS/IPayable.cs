using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPS
{
    interface IPayable
    {
        double CalculatePay();
    }

    public class Hourslyemployee : Employee, IPayable
    {
        public double HoursWorked {  get; set; }
        public double PayperHour { get; set; }

        public Hourslyemployee(string FirstName, string Lastname,
            string Email, DateTime BirthofDate,double Hoursworked,
            double PayperHour): base(FirstName,Lastname,Email,BirthofDate,0){

            HoursWorked = Hoursworked;
            this.PayperHour = PayperHour;
        
        }
        public double CalculatePay()
        {
            return HoursWorked * PayperHour;
        }
    }

    //public class Permanentemployee : Employee, IPayable
    //{
    //    public double HRA { get; set; }
    //    public double DA { get; set; }
    //    public double Tax { get; set; }

    //    public Permanentemployee(string firstName, string lastName, string email, DateTime dob,
    //                             double salary, double hra, double da, double tax)
    //        : base(firstName, lastName, email, dob, salary)
    //    {
    //        HRA = hra;
    //        DA = da;
    //        Tax = tax;
    //    }

    //    public double CalculatePay()
    //    {
    //        return (salary + HRA + DA) - Tax;
    //    }
    //}



}
