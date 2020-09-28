const sections = {
    personalInfo: {
        photoUrl: "",
        name:"Hristo Nikodimov Nenkov",
        summary:"",
        fields: [
            {
                title: "E-Mail",
                value: "hristo.nikodimov.nenkov@gmail.com"
            }
        ]
    },
    namedSections: [
        {
            title: "Education",
            fields: [
                {
                    title: "SoftUni",
                    value: "2016 - 2020"
                }
            ]
        },
        {
            title: "Languages",
            fields: [
                {
                    title:"Bulgarian",
                    value: "Native language"
                },
                {
                    title:"English",
                    value: "B2"
                }
            ]
        }
    ]
}

export default {
    loadSections: function (context){
        if(context.state.sections.keys.length === 0){
            context.commit("setSections", sections);
        }
    }
}
