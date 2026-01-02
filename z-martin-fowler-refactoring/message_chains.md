## Message chains - Fowler Page - 95 and 
## Law of Demeter
Message chains cause lot of hard code coupling and code complexity
Links:
https://linearb.io/blog/message-chains-code-smell/
https://www.youtube.com/watch?v=5EruE6OXYTU
https://pawelpluta.com/the-law-of-demeter-by-example/#The_Law_of_Demeter_in_theory
https://refactoring.com/catalog/hideDelegate.html

# Chaining methods are message chains, 
Eg 1: of message chain:
payrollService.GetDataForMonth(2022, 5).GenerateReport().ConvertToSpreadsheet().Print();




# these causes one to run complex pipeline styled programming
Eg 2: of message chain:

departments.forEach(department -> {
            DepartmentCode departmentCode = department.getCode();
            BigDecimal employeesCost = department.getDivisions().stream()
                                                 .map(Division::getTeams).flatMap(List::stream)
                                                 .map(Team::getMembers).flatMap(List::stream)
                                                 .map(Member::getCost).reduce(BigDecimal.ZERO, BigDecimal::add);
            costPerDepartment.put(departmentCode, employeesCost);
        });

**From the code point of view, we should not even know that there are Teams or Divisions under Department. We need to delegate it.**


*VIMP VGood Example Article* 
* Check the Law of Demeter here :
https://pawelpluta.com/the-law-of-demeter-by-example/#The_Law_of_Demeter_in_theory
We are getting Teams from Departments 


- *Solution: Hide Delegate - Create new methods in called class*
create a method in payrollService class to Print

eg:- refactoting explained here:-  Explained here: https://refactoring.com/catalog/hideDelegate.html

**_CHANGE_**
manager = aPerson.department.manager;

**_TO_**
manager = aPerson.manager;

class Person {
      get manager() {return this.department.manager;}
}


# Solution for Eg: 2
Take baby steps to refactor class Company

return departments.stream().collect(Collectors.toMap(Department::getCode, Department::cost));

- *Hide delegate in Delegate.cost() method*


What is not a message chain ?
Pipeline Styled Programming is not a message chain
Builder Pattern is not a message chain
https://linearb.io/blog/message-chains-code-smell/
