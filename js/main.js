import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Soyoon", role: "Student"},
                { name: "Trevor", role: "Student"},
                { name: "hehehe", role: "hohoho"}
            ]
        },

        methods: {
            logClicked(){
                console.log('click on an ele!');
                

            }

        }

    }).$mount("#app");
})();