const certificates = [
    {
        id:"17645",
        code:"ccef3c72",
        courseName:"Programming Basics - December 2016",
        issuedOn:"21/03/2017",
        language: "C#"
    },
    {
        id:"22347",
        code:"3b5343a7",
        courseName:"Programming Fundamentals - Extended - May 2017",
        issuedOn: "27/08/2017",
        language: "C#"
    },
    {
        id:"50705",
        code:"9f4afe9b",
        courseName:"Software Technologies - October 2017",
        issuedOn: "12/01/2018",
        language: "C#, Java, JavaScript, PHP"
    },
    {
        id:"61486",
        code:"e1e3b049",
        courseName:"C# Advanced - September 2018",
        issuedOn: "20/12/2018",
        language: "C#"
    },
    {
        id:"61777",
        code:"8ca7e30a",
        courseName:"C# OOP Advanced - November 2018",
        issuedOn: "23/12/2018",
        language: "C#"
    },
    {
        id:"65079",
        code:"93f4a90f",
        courseName:"JS Applications - March 2019",
        issuedOn: "17/04/2019",
        language: "JavaScript ES6"
    },
    {
        id:"65990",
        code:"26b70b74",
        courseName:"JS Advanced - February 2019",
        issuedOn: "23/04/2019",
        language: "JavaScript ES6"
    },
    {
        id:"66037",
        code:"92513f98",
        courseName:"JS Fundamentals - January 2019",
        issuedOn: "24/04/2019",
        language: "JavaScript ES6"
    },
    {
        id:"70574",
        code:"6e7b4d97",
        courseName:"C# Web Basics - May 2019",
        issuedOn: "05/09/2019",
        language: "C#"
    },
    {
        id:"75936",
        code:"13ed4146",
        courseName:"Databases Basics - MS SQL Server - September 2019",
        issuedOn: "20/01/2020",
        language: "SQL"
    },
    {
        id:"76180",
        code:"6ed93fe2",
        courseName:"Entity Framework Core - October 2019",
        issuedOn: "24/01/2020",
        language: "C#"
    },
    {
        id:"82168",
        code:"4493403c",
        courseName:"ASP.NET Core - February 2020",
        issuedOn: "08/06/2020",
        language: "C#"
    },
    {
        id:"80664",
        code:"8b358ccf",
        courseName:"VueJS - March 2020",
        issuedOn: "21/04/2020",
        language: "JavaScript ES6"
    }
]

export default {
    loadCertificates: function (context) {
        if (context.state.certificates.length === 0) {

            context.commit("setCertificates", certificates);
        }
    }
}
