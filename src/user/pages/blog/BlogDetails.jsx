import { useEffect, useState } from 'react'
import { apiEndPoint } from '../../../enviroment'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import categoryImg from '../../assets/images/blog/category.png';
import trendingImg from '../../assets/images/blog/trending.png';

export default function BlogDetails() {

    const location = useLocation()
    const slug = location.pathname.split("/")[2]

    const [state, setstate] = useState([])
    const [category, setCategory] = useState([])
    const [trending, setTrending] = useState([]);
    const [recent, setRecent] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        function getBlogPost() {
            setLoading(true)
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${apiEndPoint}blog/single/${slug}`,
            };

            axios.request(config)
                .then((response) => {
                    setstate(response.data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false)
                });
        }
        getBlogPost()
    }, [])

    useEffect(() => {
        const getTrending = async () => {
            const res = await fetch(
                `${apiEndPoint}blog/pagination?&page=0&size=5`
            );
            const data = await res.json();
            setTrending(data.data);
        };

        getTrending();
    }, []);

    useEffect(() => {
        const getRecent = async () => {
            const res = await fetch(
                `${apiEndPoint}blog/pagination?&page=1&size=5`
            );
            const data = await res.json();
            setRecent(data.data);
        };

        getRecent();
    }, []);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog/category`,
        };

        axios.request(config)
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    const { title, images, description, createdAt, author } = state;

    return (
        <>
            {
                loading ? <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <div className="container rounded bg-white mt-5 mb-5 text-center">
                        <CircularProgress color="success" />
                    </div>
                </Stack> :

                    <section className="blog_section desktop_view_blog_section">
                        <div className="content_blog_list">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h1 className="blog_title_heading">{title}</h1>
                                        <div className="blog_article">
                                            <div className="col-md-12">
                                                <div className="img_blog_article" style={{ marginBottom: '20px' }}>
                                                    <img width={640} height={480} src={images} className="attachment-astrologyFeatureImage size-astrologyFeatureImage wp-post-image" alt={title} loading="lazy" /></div>
                                            </div>
                                            <div className="addtoany_share_save_container addtoany_content addtoany_content_top">
                                                <div className="a2a_kit a2a_kit_size_ addtoany_list" data-a2a-url="https://astrotalk.com/astrology-blog/may-tarot-reading-horoscope-2023-for-each-zodiac-sign/" data-a2a-title="May Tarot Reading Horoscope 2023 for Each Zodiac Sign"><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fastrotalk.com%2Fastrology-blog%2Fmay-tarot-reading-horoscope-2023-for-each-zodiac-sign%2F&linkname=May%20Tarot%20Reading%20Horoscope%202023%20for%20Each%20Zodiac%20Sign" title="WhatsApp" rel="nofollow noopener" target="_blank"><img src="https://astrotalk.com/astrology-blog/wp-content/uploads/2022/04/whatsapp.png" alt="WhatsApp" /></a>
                                                </div>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: description }} />
                                        </div>
                                        <h4 className="blog_subheading_title">Posted On - <span className="hdweight">{moment(createdAt).format('ll')}</span> |
                                            Posted By -
                                            <span className="hdweight"> <a style={{ color: 'inherit' }} href="https://astrotalk.com/astrology-blog/author/shimonnaajaiingmail-com/">{author ? author : "Anonymous"}</a></span>
                                            | Read By -
                                            <span className="hdweight" style={{ marginLeft: '-5px' }}><div className="pvc_clear" /><p className="pvc_stats total_only" data-element-id={143989} style={{}}><i className="pvc-stats-icon small" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" version={1.0} viewBox="0 0 502 315" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,332) scale(0.1,-0.1)" stroke="none"><path d="M2394 3279 l-29 -30 -3 -207 c-2 -182 0 -211 15 -242 39 -76 157 -76 196 0 15 31 17 60 15 243 l-3 209 -33 29 c-26 23 -41 29 -80 29 -41 0 -53 -5 -78 -31z" /><path d="M3085 3251 c-45 -19 -58 -50 -96 -229 -47 -217 -49 -260 -13 -295 52 -53 146 -42 177 20 16 31 87 366 87 410 0 70 -86 122 -155 94z" /><path d="M1751 3234 c-13 -9 -29 -31 -37 -50 -12 -29 -10 -49 21 -204 19 -94 39 -189 45 -210 14 -50 54 -80 110 -80 34 0 48 6 76 34 21 21 34 44 34 59 0 14 -18 113 -40 219 -37 178 -43 195 -70 221 -36 32 -101 37 -139 11z" /><path d="M1163 3073 c-36 -7 -73 -59 -73 -102 0 -56 133 -378 171 -413 34 -32 83 -37 129 -13 70 36 67 87 -16 290 -86 209 -89 214 -129 231 -35 14 -42 15 -82 7z" /><path d="M3689 3066 c-15 -9 -33 -30 -42 -48 -48 -103 -147 -355 -147 -375 0 -98 131 -148 192 -74 13 15 57 108 97 206 80 196 84 226 37 273 -30 30 -99 39 -137 18z" /><path d="M583 2784 c-38 -19 -67 -74 -58 -113 9 -42 211 -354 242 -373 16 -10 45 -18 66 -18 51 0 107 52 107 100 0 39 -1 41 -124 234 -80 126 -108 162 -133 173 -41 17 -61 16 -100 -3z" /><path d="M4250 2784 c-14 -9 -74 -91 -133 -183 -95 -150 -107 -173 -107 -213 0 -55 33 -94 87 -104 67 -13 90 8 211 198 130 202 137 225 78 284 -27 27 -42 34 -72 34 -22 0 -50 -8 -64 -16z" /><path d="M2275 2693 c-553 -48 -1095 -270 -1585 -649 -135 -104 -459 -423 -483 -476 -23 -49 -22 -139 2 -186 73 -142 361 -457 571 -626 285 -228 642 -407 990 -497 242 -63 336 -73 660 -74 310 0 370 5 595 52 535 111 1045 392 1455 803 122 121 250 273 275 326 19 41 19 137 0 174 -41 79 -309 363 -465 492 -447 370 -946 591 -1479 653 -113 14 -422 18 -536 8z m395 -428 c171 -34 330 -124 456 -258 112 -119 167 -219 211 -378 27 -96 24 -300 -5 -401 -72 -255 -236 -447 -474 -557 -132 -62 -201 -76 -368 -76 -167 0 -236 14 -368 76 -213 98 -373 271 -451 485 -162 444 86 934 547 1084 153 49 292 57 452 25z m909 -232 c222 -123 408 -262 593 -441 76 -74 138 -139 138 -144 0 -16 -233 -242 -330 -319 -155 -123 -309 -223 -461 -299 l-81 -41 32 46 c18 26 49 83 70 128 143 306 141 649 -6 957 -25 52 -61 116 -79 142 l-34 47 45 -20 c26 -10 76 -36 113 -56z m-2057 25 c-40 -58 -105 -190 -130 -263 -110 -324 -59 -707 132 -981 25 -35 42 -64 37 -64 -19 0 -241 119 -326 174 -188 122 -406 314 -532 468 l-58 71 108 103 c185 178 428 349 672 473 66 33 121 60 123 61 2 0 -10 -19 -26 -42z" /><path d="M2375 1950 c-198 -44 -350 -190 -395 -379 -18 -76 -8 -221 19 -290 114 -284 457 -406 731 -260 98 52 188 154 231 260 27 69 37 214 19 290 -38 163 -166 304 -326 360 -67 23 -215 33 -279 19z" /></g></svg></i> &nbsp;2,050&nbsp;</p><div className="pvc_clear" /></span>
                                        </h4>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="recently_posted_blogs">
                                            <div className="heading_top_trending">
                                                <div className="icon_img_trending">
                                                    <img src={trendingImg} height="100%" width="100%" alt="Untitled-2" />
                                                </div>
                                                <div className="heading_name_trending">
                                                    <h4>Trending Now</h4>
                                                    <h6>Trending Stories</h6>
                                                </div>
                                            </div>
                                            {
                                                trending.map((value) => {
                                                    const { _id, title, slug } = value;
                                                    return (
                                                        <Link key={_id} to={`/blog/${slug}`} className="trending_link">{title}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="recently_posted_blogs">
                                            <div className="heading_top_trending">
                                                <div className="icon_img_trending">
                                                    <img src={trendingImg} height="100%" width="100%" alt="Untitled-2" />
                                                </div>
                                                <div className="heading_name_trending">
                                                    <h4>Recent Blog</h4>
                                                    <h6>Recent Stories</h6>
                                                </div>
                                            </div>
                                            {
                                                recent.map((value) => {
                                                    const { _id, title, slug } = value;
                                                    return (
                                                        <Link key={_id} to={`/blog/${slug}`} className="trending_link">{title}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="categories_section">
                                            <div className="heading_top_trending">
                                                <div className="icon_img_trending">
                                                    <img src={categoryImg} height="100%" width="100%" alt="Untitled-2" />
                                                </div>
                                                <div className="heading_name_trending">
                                                    <h4>Categories</h4>
                                                    <h6>Select Topic</h6>
                                                </div>
                                            </div>
                                            <div className="catergories_items">
                                                <div className="categories_link"><a href="/blog" style={{ color: '#323232' }}>Home</a></div>
                                                {
                                                    category?.map((val) => {
                                                        return (
                                                            <div key={val._id} className="categories_link"><a href={`/blog/category/${val.slug}`} style={{ color: '#323232' }}>{val.category}</a></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        {/* <div className="recently_posted_blogs">
                                            <a href="https://app.adjust.net.in/fsgd74t?fallback=https%3A%2F%2Fastrotalk.com%2Fchat-with-astrologer">
                                                <img src="https://aws.astrotalk.com/images/d37d00b0-318f-4080-86cf-ad0854b7bb30.png" height="100%" width="100%" alt="Chat with astrologer" />
                                            </a>
                                        </div> */}
                                        {/* start compatibility*/}

                                        {/* end compatibility*/}

                                        <div className="slide slick-slide slick-current slick-active" style={{ width: '280px' }} data-slick-index={0} aria-hidden="false" tabIndex={0}>
                                            <a className="box_section free_service" href="https://astrotalk.com/horoscope/daily-horoscope" tabIndex={0}>
                                                <div className="icon icons_saprate_image daily_horoscope_icon" />
                                                <h5>Daily Horoscope</h5>
                                                <p className="description"> Get free Aries daily horoscope prediction
                                                    today online from the best astrologer. Read your Aries Zodiac
                                                    Sign horoscope today! </p>
                                            </a>
                                        </div>
                                        <div className="slide slick-slide slick-current slick-active" style={{ width: '280px' }} data-slick-index={1} aria-hidden="false" tabIndex={0}>
                                            <a className="box_section free_service" href="https://astrotalk.com/freekundli" tabIndex={0}>
                                                <div className="icon icons_saprate_image free_kundli_icon" />
                                                <h5>Free Kundli</h5>
                                                <p className="description"> Generate your free online kundli report from
                                                    Astrotalk. Our Kundli software can help you predict the future
                                                    for yourself by reading the birth chart. </p>
                                            </a>
                                        </div>
                                        <div className="slide slick-slide slick-current slick-active" style={{ width: '280px' }} data-slick-index={0} aria-hidden="false" tabIndex={0}>
                                            <a className="box_section free_service" href="https://astrotalk.com/matchmaking" tabIndex={0}>
                                                <div className="icon icons_saprate_image match_making_icon" />
                                                <h5>Kundli Matching</h5>
                                                <p className="description"> Check Love Compatibility and Marriage
                                                    Prediction online at Astrotalk. Get the best Horoscope and
                                                    kundli matching predictions today! </p>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t\t\t.total_only {\n\t\t\t\t\t\t\t\t\t\t\tfont-size: 12px !important;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.icn1 {\n\t\t\t\t\t\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t" }} />

                                <div className="free_aries_horoscope_section_add mb-5">
                                    <h3 className="heading_want_know_aries_virgo_match"> Connect with an Astrologer on
                                        Call or Chat for more personalised detailed predictions. </h3>
                                    <div className="btns_contact_astrologer">
                                        <Link to="/talk-with-astrologer" style={{ textDecoration: 'none' }}>
                                            <button type="button" className="bnt_astrologer_contact"><i className="fa fa-phone" />
                                                <span>Talk to Astrologer</span>
                                            </button>
                                        </Link>
                                        <Link to="/chat-with-astrologer" style={{ textDecoration: 'none' }}>
                                            <button type="button" className="bnt_astrologer_contact"><i className="fa fa-comment-o" />
                                                <span>Chat with Astrologer</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
            }
        </>
    )
}
