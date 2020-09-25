const sections = {
    personalInfo: {
        photoUrl: "",
        name:"Hristo Nikodimov Nenkov",
        summary:"sd;ughl;ksjglkjdg bskjd gbdkjsbgsd kjbgsljsbg ;kjwegogews gb/dsjkgba eksjdbgkjsgb kjsdbgskjdsb gkjdsbgkjdbgkj sdbgkjbdskjgb dskjgbkjdsbgk jbsgkjdsbk jgbdkjgbs dkjgbdkjb gkjdbgkjdsbsg kjbsegkjbkjewbgjkvb vjklvblewbvkj",
        fields: [
            {
                title: "E-Mail",
                value: "hristo.nikodimov.nenkov@gmail.com"
            },
            {
                title: "Phone Number",
                value: "+34611280084"
            }
        ]
    },
    namedSections: [
        {
            title: "Education and Experience",
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
