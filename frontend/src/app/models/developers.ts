export interface DeveloperResponse {
  status: number;
  message: string;
  data: DeveloperProfile[];
}

export interface DeveloperProfile {
  name: string;
  // experience
  title: String;
  company: String;
  yearsOfExperience: number;
  workStart: String;
  workEnd: String;
  // current: boolean;
  description: String;
  // skills
  frontendSkills: String;
  backendSkills: String;
  databaseSkills: String;
  devopSkills: String;

  //education
  school: String;
  degree: String;
  fieldofstudy: String;
  educationStart: String;
  educationEnd: String;

  devImg: String;
  //social
  twitter: String;
  facebook: String;
}

// let devProfile : DeveloperProfile[] =[];
// devProfile = [{ name:'Kagiso Marabe', title:'Software Developer',company: 'Digital Academy' , yearsOfExperience:2 ,description: 'developing restful apis' , skills: 'html, css, angular,php, java, nodejs,Sql,mysql workbench' , school:'University Of Pretoria' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' },
// { name:'Jaden Boikhutso',title:'Ms',company: 'Asolutions' , yearsOfExperience:4 ,description: 'designing responsive webistes asn applications' , skills: 'html, css, angular,php, java, nodejs,Sql,mysql workbench' , school:'University Of South Africa' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' },
// {name:'Lesego Ntolo', title:'Mr',company: 'ABSA' , yearsOfExperience:3 ,description: 'Specialising with developing online shopping(e-commerce) webpages' , skills: 'html, css,react,php, java, nodejs,mongo' , school:'WITS' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' },
// {name:'Given Smith', title:'Mr',company: 'Digital Academy' , yearsOfExperience:5 ,description: 'developing restful apis' , skills: 'html, css, angular,php, java,end-to-end testing, nodejs,Sql,mysql workbench' , school:'Tshwane University Of Technology' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' }

// ];

// export interface education {
//   school: String;
//   degree: String;
//   fieldofstudy: String;
//   from: String;
//   to: Date;
//   current: Date;
//   description: String;
// }

// export interface social {
//   twitter: String;
//   facebook: String;
// }
