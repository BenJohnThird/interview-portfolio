import { WorkExperience } from "../models/work-experience";

export const WORK_EXPERIENCE_MOCK: WorkExperience[] = [
  {
    companyName: 'Etica Digital',
    companyRole: 'Senior Software Engineer',
    technologyUsed: ['Angular', 'Typescript', 'Javascript', 'AWS', 'Unit Testing', 'C# .NET'],
    startDate: 'April 20, 2021',
    isCurrentCompany: true,
    responsibilities: [
      'Conducting and discussing the needed libraries to use to each features as the\n' +
      ' main/senior angular developer',
      'Developing and maintaining a robust application using the Angular framework,\n' +
      ' incorporating AWS for secure authorization and authentication.',
      'Conducting comprehensive unit testing in Angular, ensuring high code quality and\n' +
      ' minimizing bugs.',
      'Playing a key role in feature planning and decision-making, contributing to the\n' +
      ' application\'s development from inception.',
      'Efficiently resolving bugs, enhancing application stability and performance.',
      'Integrating with backend services by consuming API endpoints developed in C#,\n' +
      ' facilitating seamless frontend-backend communication.',
      'Creating RESTFul APIs that is deployed in AWS Lambda to be consumed in\n' +
      ' frontend.',
    ],
  },
  {
    companyName: 'Legalsight',
    companyRole: 'Senior Software Engineer',
    technologyUsed: ['Angular', 'Typescript', 'Javascript', 'Karma Testing', 'Unit Testing'],
    startDate: 'April 5, 2020',
    endDate: 'April 29, 2021',
    responsibilities: [
      'Developed and maintained a scalable application using the Angular (7-15)\n' +
      ' framework.',
      'Conducted extensive Angular unit testing, ensuring comprehensive test coverage\n' +
      ' and high code quality.',
      'Actively participated in feature planning and decision-making, contributing to the\n' +
      ' application\'s development from the ground up.',
      'Efficiently resolved bugs, enhancing the stability and performance of the\n' +
      ' application.',
      'Integrated with backend services by consuming API endpoints developed in Java\n' +
      ' Spring Boot, ensuring seamless frontend-backend communication',
    ],
  },
  {
    companyName: 'Accenture',
    companyRole: 'Senior Software Engineer',
    technologyUsed: ['Angular', 'Typescript', 'Javascript', 'NodeJS', 'Google Cloud', 'SQL'],
    startDate: 'November 17, 2019',
    endDate: 'April 5, 2021',
    responsibilities: [
      'Promoted into Senior Role within just 1year and 6months.',
      'Designed applications to align with business process requirements and\n' +
      ' specifications.',
      'Created and maintained RESTful endpoints using Node.js, ensuring seamless\n' +
      ' integration with the database.',
      'Developed and implemented proof of concepts (POCs) for various integrations and\n' +
      ' features.'
    ],
  },
  {
    companyName: 'Accenture',
    companyRole: 'Associate Software Engineer',
    technologyUsed: ['Angular', 'Typescript', 'Javascript', 'C# .NET', 'Azure', 'SQL'],
    startDate: 'November 17, 2019',
    endDate: 'April 5, 2021',
    responsibilities: [
      'Developed system specifications and interfaces for complex components',
      'Managed databases with MSSQL Server and generated reports using MS Server\n' +
      ' Reporting Services.',
      'Developed web applications using ASP.NET MVC, ensuring seamless integration\n' +
      ' with frontend and backend components'
    ],
  },
]
