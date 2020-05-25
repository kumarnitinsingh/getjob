import React from 'react';
import './JobBoard.css';
const JobBoard=()=>{

return(
<div>
<h1> Click on image to see job availability!</h1>
<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<a href='https://www.sarkarinaukridaily.in'>
	<img class='img' alt='' src={'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/jobs-660_031819053533.jpg'}/>
</a>
</div>
<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<a href="https://www.careerbuilder.com">
	<img class='img' alt='' src={'https://verticalstaffingresources.com/blog/wp-content/uploads/2017/11/Jobs-Graphic.jpg'}/>
	</a>
	</div>


<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<a href="https://www.indeed.co.in">
	<img class='img' alt='' src={'https://jobs.lincolnelectric.com/sites/lincolnelectric/images/hp-corporate-img.jpg'}/>
</a>
</div>
<div className='tc bg -light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
 <a href='https://www.naukri.com/'>
	<img class='img' alt='' src={'https://img-d02.moneycontrol.co.in/news_image_files/2015/356x200/u/us-jobs-356_4853_356.jpg'}/>
</a>
</div>
	
<div className='tc bg -light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<h1>Navigate the jobs</h1>
<ul class='nav'>
<li> <a href='https://khabar.ndtv.com/news/'>  JOB NEWS(HINDI)</a></li>
<li> <a href='https://m.timesofindia.com'> JOB NEWS(ENGLISH)</a></li>
<li> <a href='https://www.sarkarinaukridaily.in'>GOVT JOBS</a></li>
<li> <a href='https://www.naukri.com/'>PRIVATE JOBS</a></li>
</ul>

</div>
<div className='tc bg -light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<h1>Place for banners</h1>
<img  alt='' src={'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Banner-Sizes-02.jpg'}/>
</div>
<div>
<footer className='tc bg -light-green dib br3 pa3 ma2 grow bw2 shadow-5'>Copyright &copy;2020 Powered by OST PLACEMENT SEARCH PRIVATE LIMITED
</footer>

</div>
</div>
	




);

}

export default JobBoard;