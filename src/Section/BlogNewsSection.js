import './../App.css'
import blog01 from './../images/blog-01.png'
import blog02 from './../images/blog-02.png'
import blog03 from './../images/blog-03.png'
import iconMan from './../images/icon-man.svg'
import iconCalender from './../images/icon-calender.svg'


function BlogNewsSection() {

    const blogs = [
        {
            id: 1,
            image: blog01,
            link: '#',
            author: 'Musharof Chy',
            date: '25 Dec, 2025',
            title: 'Free advertising for your online business'
        },
        {
            id: 2,
            image: blog02,
            link: '#',
            author: 'Musharof Chy',
            date: '25 Dec, 2025',
            title: '9 simple ways to improve your design skills'
        },
        {
            id: 3,
            image: blog03,
            link: '#',
            author: 'Musharof Chy',
            date: '25 Dec, 2025',
            title: 'Tips to quickly improve your coding speed.'
        },
    ]

    return (

        <section className="ji gp uq">
            <div className="animate_top bb ze rj ki xn vq">
                <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                    Latest Blogs & News
                </h2>
                <p className="bb on/5 wo/5 hq">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
            </div>
            <div className="bb ye ki xn vq jb jo">
                <div className="wc qf pn xo zf iq">
                    {blogs.map((blog) => {
                        return (
                            <div key={blog.id} className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img className="w-full" src={blog.image} alt="Blog" />
                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a href={blog.link} className="vc ek rg lk gh sl ml il gi hi">Read More</a>
                                    </div>
                                </div>
                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img src={iconMan} alt="User" />
                                            <p>{blog.author}</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img src={iconCalender} alt="Calender" />
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href={blog.link}>{blog.title}</a>
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogNewsSection;