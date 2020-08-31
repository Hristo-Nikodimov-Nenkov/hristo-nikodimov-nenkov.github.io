import certificatesService from "@/services/certificates";

export default {
    namespaced: true,
    state: {
        certificates: []
    },
    getters: {},
    mutations: {
        setCertificates: (state, certificates) => state.certificates = certificates,
    },
    actions: {
        loadCertificates: certificatesService.loadCertificates
    }
}
