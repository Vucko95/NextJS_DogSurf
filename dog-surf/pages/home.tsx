import cv2 from '../public/images/cv2.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image';


const homee = () => {
    return (

<div className="homepage_all">

<section > 
<div className={styles.Banner}>
    {/* <img alt="" src={dog_logo}   /> */}
    <Image alt="test" src={cv2}   />
        {/* <div className="Banner-text"> */}
        <div className={styles.Bannertext}>
      

        </div>
</div>
</section>
{/* // 3 Pictures */}
<section > 
{/* <div className="layers">  */}
<div className={styles.layers}> 

<h1>Pet First Approach to Accomodation</h1>
<div className={styles.rows}> 
    <div className={styles.colinrow}> 
        <h3>Socialization</h3>
        <p>Sometimes dogs might have fear of getting to know new people, as they might have some bad experience in the past that they remeber. Meeting of new caring might change thinking of these dogs </p>
    </div>
    <div className={styles.colinrow}> 
        <h3>New Friendships</h3>
        <p>Many dogs can often be depressed if they are lonely for bigger amount of time. Meeting new friendly dogs from other owners enriches their life a lot. </p>
    </div>
    <div className={styles.colinrow}> 
        <h3>New Adventures</h3>
        <p>Most of the dogs love to explore new areas, specially parks, forests and simillar, with DogSurf they might be taken for a walk to a different locations with their temporary keeper.</p>
    </div>
</div>
</div>
</section>


<section> 
<div className={styles.picturelayers}>

<div className={styles.picinrow }>
        <div className="onepic">
                <img alt="test" src="/images/dog1.jpg"  />
            <h1 className={styles.dogs_h1}>Bumble</h1>
            </div>
            
        <div className="onepic">
                {/* <Image alt="test" src={dog2}   /> */}
                <img alt="test" src="/images/dog2.jpg"  />
            <h1 className={styles.dogs_h1} >John</h1>
        </div>   
        
        
        <div className="onepic">
                {/* <Image alt="test" src={dog3}   /> */}
                <img alt="test" src="/images/dog3.jpg"  />
            <h1 className={styles.dogs_h1}>Silver Jack</h1>
        </div>   
</div>   
    



</div>
</section>


</div>


    )
}
export default homee