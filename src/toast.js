import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'


const toast = {
    error: (message, title = '') => {
        return iZtoast.error({
            title: title,
            message: message,
            position: 'bottomRight',
            onClosing: function() {
                console.log("callback fechou!");
            }
        });
    }
};

export default toast;