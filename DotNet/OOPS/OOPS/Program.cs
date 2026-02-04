//// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
using OOPS;
using System;
class Program
{
    static void Main(string[] args)
    {

        //Person emp = new Employee(
        //       "Hari",
        //       "Doe",
        //       "hari@example.com",
        //       new DateTime(1998, 5, 25),
        //       50000
        //   );

        //Console.WriteLine("Employee Details:");
        //Console.WriteLine($"Is Adult: {emp.IsAdult}");
        //Console.WriteLine($"Sun Sign: {emp.SunSign}");
        //Console.WriteLine($"Is Birthday Today: {emp.IsBirthday}");
        //Console.WriteLine($"Screen Name: {emp.ScreenName}");
        //Console.WriteLine();

        //// HourlyEmployee Test
        //HourlyEmployee hourlyEmp = new HourlyEmployee(
        //    "Ravi",
        //    "Kumar",
        //    "ravi@example.com",
        //    new DateTime(2000, 3, 10),
        //    160,
        //    300
        //);

        //Console.WriteLine("Hourly Employee:");
        //Console.WriteLine($"Total Pay: {hourlyEmp.TotalPay}");
        //Console.WriteLine();

        //// PermanentEmployee Test
        //PermanentEmployee permEmp = new PermanentEmployee(
        //    "Anita",
        //    "Sharma",
        //    "anita@example.com",
        //    new DateTime(1995, 11, 15),
        //    60000,
        //    10000,
        //    8000,
        //    7000
        //);

        //Console.WriteLine("Permanent Employee:");
        //Console.WriteLine($"Total Pay: {permEmp.TotalPay}");
        //Console.WriteLine($"Net Pay: {permEmp.NetPay}");

        IPayable hourlyEmp = new HourlyEmployee(
           "Ravi",
           "Kumar",
           "ravi@example.com",
           new DateTime(2000, 3, 10),
           160,
           300
       );

        Console.WriteLine("Hourly Employee Pay:");
        Console.WriteLine(hourlyEmp.CalculatePay());
        Console.WriteLine();

        // Permanent Employee Test
        IPayable permanentEmp = new PermanentEmployee(
            "Anita",
            "Sharma",
            "anita@example.com",
            new DateTime(1995, 11, 15),
            60000,
            10000,
            8000,
            7000
        );

        Console.WriteLine("Permanent Employee Pay:");
        Console.WriteLine(permanentEmp.CalculatePay());



    }
}
