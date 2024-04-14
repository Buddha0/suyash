
import Widjet from '../components/Widjet'





export default function Home() {

    return (
        <>
           
         
             
                 
                    <div className='widjets'>
                        <Widjet type={"users"} />
                        <Widjet type={"order"} />
                        <Widjet type={"earning"} />
                        <Widjet type={"balance"} />
                    </div>

            




        </>
    )
}