$(function() {
    var $LoginForm = $('#LoginForm');
    if($LoginForm.length){
        $LoginForm.validate({
            rules: {
                useremail:{
                    required: true
                },
                username: {
                    required: true
                },
                number:{
                    required: true
                },
                password:{
                    required: true
                }
            },
            messages:{
                useremail:{
                    required: 'Formani talapqa saí toltyryńyz',
                    email: 'Email talapqa sai emes'
                },
                username:{
                    required: 'Formani talapqa saí toltyryńyz'
                },
                number:{
                    required: 'Sandardy durys engizińiz'
                },
                password:{
                    required: 'Qupiía sóz talapqa sai emes'
                }
            }
        })
    }
})