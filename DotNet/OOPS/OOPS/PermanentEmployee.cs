using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPS
{
    public class PermanentEmployee: Employee,IPayable
    {

        public double HRA {  get; set; }
        public double DA { get; set; }
        public double Tax {  get; set; }
        public PermanentEmployee(string FirstName, string LastName, string Email,
            DateTime BirthofDate,double salary, double HRA, double DA, double Tax):
            base(FirstName,LastName,Email, BirthofDate, 0)
        {
           this.HRA = HRA;
            this.DA = DA;
            this.Tax = Tax;

        }

        public double CalculatePay()
        {
            return (salary + HRA + DA) - Tax;
        }
       
    }
}
