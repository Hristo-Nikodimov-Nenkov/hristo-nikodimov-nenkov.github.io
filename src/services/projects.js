const projects = [
    {
        name:"CV Generator",
        description:"",
        language:"C#",
        techStack:"ASP.NET Core, Blazor"
    },
    {
        name: "Portfolio",
        description: "",
        language: "JavaScript",
        techStack: "ES6, Vue"
    }
]

export default {
    loadProjects: function (context){
        if (context.state.projects.length === 0) {

            context.commit("setProjects", projects);
        }
    }
}
