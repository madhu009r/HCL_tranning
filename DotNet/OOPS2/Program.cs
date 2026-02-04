using OOPS2;
using System;
class Program
{
    static void Main(string[] args)
    {
        Polymorphism calculator = new Polymorphism();

        double circleArea = calculator.CalculateArea(7);
        double rectangleArea = calculator.CalculateArea(10, 5);
        double triangleArea = calculator.CalculateArea(8, 6, true);

        Console.WriteLine("Area of Circle: " + circleArea);
        Console.WriteLine("Area of Rectangle: " + rectangleArea);
        Console.WriteLine("Area of Triangle: " + triangleArea);
    }
}
