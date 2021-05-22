export default {
    namespaced: true,
    state: {
        softuni: {
            modules: [
                {
                    name: "Entry module",
                    courses: [
                        {
                            name: "Programming Basics",
                            instance: new Date(2016, 11),
                            grade: 6,
                            certificateUrl: "https://softuni.bg/Certificates/Details/17645/ccef3c72"
                        }
                    ]
                },
                {
                    name: "Tech Module",
                    courses: [
                        {
                            name: "Programming Fundamentals - Extended",
                            instance: new Date(2017, 4),
                            grade: 6.00,
                            certificateUrl: "https://softuni.bg/Certificates/Details/22347/3b5343a7"
                        },
                        {
                            name: "Software Technologies",
                            instance: new Date(2017, 9),
                            grade: 6.00,
                            certificateUrl: "https://softuni.bg/Certificates/Details/50705/9f4afe9b"
                        }
                    ]
                },
                {
                    name: "C# Fundamentals",
                    courses: [
                        {
                            name: "C# Advanced",
                            instance: new Date(2018, 8),
                            grade: 6,
                            certificateUrl: "https://softuni.bg/Certificates/Details/61486/e1e3b049"
                        },
                        {
                            name: "C# OOP Basics",
                            instance: new Date(2018, 9),
                            grade: 4.65,
                            certificateUrl: ""
                        },
                        {
                            name: "C# OOP Advanced",
                            instance: new Date(2018, 10),
                            grade: 6,
                            certificateUrl: "https://softuni.bg/Certificates/Details/61777/8ca7e30a"

                        }
                    ]
                },
                {
                    name: "C# DB",
                    courses: [
                        {
                            name: "Databases Basics - MS SQL Server",
                            instance: new Date(2019, 8),
                            grade: 5.23,
                            certificateUrl: "https://softuni.bg/Certificates/Details/75936/13ed4146"
                        },
                        {
                            name: "Entity Framework Core",
                            instance: new Date(2019, 9),
                            grade: 5.23,
                            certificateUrl: "https://softuni.bg/Certificates/Details/76180/6ed93fe2"
                        }
                    ]
                },
                {
                    name: "C# Web",
                    courses: [
                        {
                            name: "C# Web Basics",
                            instance: new Date(2019, 4),
                            grade: 5.25,
                            certificateUrl: "https://softuni.bg/Certificates/Details/70574/6e7b4d97"
                        },
                        {
                            name: "ASP.NET Core",
                            instance: new Date(2019, 1),
                            grade: 5,
                            certificateUrl: "https://softuni.bg/Certificates/Details/82168/4493403c"
                        }
                    ]
                },
                {
                    name: "JS Core",
                    courses: [
                        {
                            name: "JS Fundamentals",
                            instance: new Date(2019, 0),
                            grade: 6,
                            certificateUrl: "https://softuni.bg/Certificates/Details/66037/92513f98"
                        },
                        {
                            name: "JS Advanced",
                            instance: new Date(2019, 1),
                            grade: 5.64,
                            certificateUrl: "https://softuni.bg/Certificates/Details/65990/26b70b74"
                        },
                        {
                            name: "JS Applications",
                            instance: new Date(2019, 2),
                            grade: 5.80,
                            certificateUrl: "https://softuni.bg/Certificates/Details/65079/93f4a90f"
                        }
                    ]
                }
            ],
            openCourses: [
                {
                    name: "VueJS",
                    instance: new Date(2020, 2),
                    grade: 5.95,
                    certificateUrl: "https://softuni.bg/Certificates/Details/80664/8b358ccf"
                }
            ]
        }
    },
    getters: {
        getAllCourses: state => {
            let courses = [];
            for (const module of state.softuni.modules) {
                courses = [...courses, ...module.courses]
            }
            courses = [...courses, ...state.softuni.openCourses]

            return courses;
        },
        getModulesAsLinks: (state) =>
            state.softuni.modules.map(m => ({
                url: escape(`/education/${m.name}`),
                text: m.name
            })),
        getModuleCoursesAsLinks: (state) => (moduleName) =>
            state.softuni
                .modules
                .find(m => m.name === moduleName)
                .courses
                .map(c => ({
                    url: escape(`/education/${moduleName}/${c.name}`),
                    text: c.name
                })),
    },
    mutations: {},
    actions: {}
}
