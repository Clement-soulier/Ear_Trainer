import BackArrowLayout from '../BackArrowTopBar';
import './about.css'

export default function Page(){
    return(
        <>
        <BackArrowLayout title={"About"} />
        <div className='AboutScreen'>
            <p className='AboutText'>Ear Trainer is a web app which the goal is to train absolute pitch, which is the ability to recognize a note by earing it. For this purpose this app propose lessons where note are played and the goal is to tell which one.</p>
            <p className='AboutText'>This app is my very first project so it will be perfectible, if you have an observation or an ask to improve the app contact me :<a href='mailto:clement.soulier12@gmail.com'>clement.soulier12@gmail.com</a>.</p>
        </div>
        </>
    );
}