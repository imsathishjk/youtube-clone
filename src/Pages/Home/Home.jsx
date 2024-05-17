import { ToggleBar } from '../../Components/ToggleBar/ToggleBar';
import { VideoList } from '../../Components/VideoList/VideoList';
export const Home = ({showToggle, setShowToggle}) => {
    return (
        <div className='flex justify-between gap-5 mt-[65px] px-5'>
            <ToggleBar showToggle={showToggle} setShowToggle={setShowToggle} />
            <VideoList showToggle={showToggle} />
        </div>
    )
}