import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiEndPoint } from '../../../enviroment'
import { Link, useLocation } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import categoryImg from '../../assets/images/blog/category.png';
import trendingImg from '../../assets/images/blog/trending.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import moment from 'moment';

export default function BlogHome() {

    const location = useLocation()
    const slug = location.pathname.split("/")[3]

    const [category, setCategory] = useState([])
    const [page, setpage] = useState(1);
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [lodingComments, setLodingComments] = useState(false);
    const [trending, setTrending] = useState([]);
    const [search, setSearch] = useState("");

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

    useEffect(() => {
        const getTrending = async () => {
            const res = await fetch(
                `${apiEndPoint}blog/pagination?&page=0&size=5&slug=${slug}`
            );
            const data = await res.json();
            setTrending(data.data);
        };

        getTrending();
    }, []);

    useEffect(() => {
        const getComments = async () => {
            setLodingComments(true)
            const res = await fetch(
                `${apiEndPoint}blog/pagination?&page=0&size=6&slug=${slug}`
            );
            const data = await res.json();
            setItems(data.data);
            setLodingComments(false)
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `${apiEndPoint}blog/pagination?&page=${page}&size=6&slug=${slug}`
        );
        const data = await res.json();
        return data.data;
    };

    const fetchData = async () => {
        try {
            const commentsFormServer = await fetchComments();

            setItems([...items, ...commentsFormServer]);
            if (commentsFormServer.length === 0 || commentsFormServer.length < 6) {
                sethasMore(false);
            }
            setpage(page + 1);
        } catch (error) {
            sethasMore(false);
        }
    };

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog/search?title=${search}`,
        };

        axios.request(config)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [search])

    return (
        <>
            <section id="blogcontent">
                {/* Desktop view blog section */}
                <section className="blog_section desktop_view_blog_section">
                    <div className="content_blog_list">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <div className="categories_section">
                                        <div className="heading_top_trending">
                                            <div className="icon_img_trending">
                                                <img src={categoryImg} alt="category" />
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
                                    <div className="recently_posted_blogs">
                                        <div className="heading_top_trending">
                                            <div className="icon_img_trending">
                                                <img src={trendingImg} alt="trending" />
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
                                </div>
                                <div className="col-9">
                                    <div className="search_section_blog">
                                        <div className="blog_search" style={{ margin: 'auto', maxWidth: '300px' }}>
                                            <button type="submit" className="blog_search_btn"><SearchOutlinedIcon /></button><input className="input_box_blog" onChange={(event) => setSearch(event.target.value)} type="search" autoComplete="off" placeholder="Let's find what you're looking for..." name="s" />
                                        </div>
                                    </div>
                                    <InfiniteScroll
                                        dataLength={items.length} //This is important field to render the next data
                                        next={fetchData}
                                        hasMore={hasMore}
                                        style={{ overflow: "hidden" }}
                                        loader={<h4>Loading...</h4>}
                                        endMessage={<p style={{ textAlign: 'center' }}>
                                            <b>Yay! You have seen it all</b>
                                        </p>}
                                    >
                                        <div className="row">
                                            {items.map((value) => {
                                                const { _id, title, images, slug, createdAt, author } = value
                                                return (
                                                    <div key={_id} className="col-md-4">
                                                        <Link to={`/blog/${slug}`} title={title} className="blog_box_content">
                                                            <div className="blog_img_content">
                                                                <img width={640} height={480} src={images} className="img-responsive wp-post-image" alt={title} loading="lazy" />                            </div>
                                                            <div className="description_blog" style={{ minHeight: '60px' }}>
                                                                {title} </div>
                                                            <div className="last_row_blog_box">
                                                                <div className="writter_blog_box">{author ? author : "Anonymous"}</div>
                                                                <div className="date_description_blog">
                                                                    {moment(createdAt).format('ll')} </div>
                                                            </div>
                                                            <div className="review_upper_image">
                                                                <RemoveRedEyeOutlinedIcon />
                                                                <span>1,577</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </InfiniteScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seo_contant">
                        <div className="container">
                            <h2 className="heading_blog_seo">Astrology Blogs
                                <i className="fal fa-chevron-down" id="pointer_event_none" /></h2>
                            <h4 className="subheading_blog_seo">Trending Astrology Topics &amp; Astrology News</h4>
                            <span id="trendingdesc">
                                <p>Have a problem? Astrotalk's astrology blog will help you find solutions to the same. Or even if you simply seek to learn the hows and wows of astrology, then again, the informative blogs brewed in this space using insights of the learned <a href="https://astrotalk.com">astrologers</a> of Astrotalk can help you gain much more than your seek.</p>
                                <p>Be it the remedies for Manglik dosh you need information for or home Vastu, right from Vedic astrology blog to the daily <a href="https://astrotalk.com/horoscope/daily-horoscope">horoscope</a>, this space is always brimming with stories that cover all the recent happenings in the astrology world while trying to impart the best knowledge on astrological concepts that keeps you asking for more.</p>
                                <h3>Astrology Information</h3>
                                <p>Astrology is a vast concept and even the slightest shift in astrological elements like stars, planets, etc. can change a lot for you in terms of love, luck, travel, career and more. So to keep yourself updated with such changes, you can rely on these Indian astrology blogs.</p>
                                <p>Also, if any of the blogs in this section does not quench your thirst for astrology information, you can always start a fruitful conversation in the comment section of the blogs and directly get a reply from our astrologers. Fun isn't it? You can also <a href="https://astrotalk.com/chat-with-astrologer">chat with astrologer</a> or <a href="https://astrotalk.com/talk-to-astrologer">talk to astrologer</a> for your future predictions.</p>
                            </span>
                        </div>
                    </div>
                </section>
                {/* Desktop view blog section */}
                {/* Mobile view blog section */}
                <section className="blog_section mobile_view_blog_section">
                    <div className="container">
                        {/* <h1 class="astrology_blog_heading">Astrology Blog</h1> */}
                        <div className="categories_section_mbl_view">
                            <div className="categories_items_mbl_view">
                                <div className="categories_link"><a href="/blog" style={{ color: '#323232' }}>Home</a></div>
                                {
                                    category?.map((val) => {
                                        return (
                                            <div key={val._id} className="categories_box_mbl_view">
                                                <div className="name_category_mbl_view"><a href={`/category/${val.slug}`} style={{ color: '#323232' }}>{val.category}</a></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="search_section_blog">
                        <div className="blog_search" style={{ margin: 'auto', maxWidth: '300px' }}>
                            <button type="submit" className="blog_search_btn"><SearchOutlinedIcon /></button><input className="input_box_blog" onChange={(event) => setSearch(event.target.value)} type="search" autoComplete="off" placeholder="Let's find what you're looking for..." name="s" />
                        </div>
                    </div>

                    <InfiniteScroll
                        dataLength={items.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={hasMore}
                        style={{ overflow: "hidden" }}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>}
                    >

                        {items.map((value) => {
                            const { _id, title, images, slug, createdAt, author } = value
                            return (
                                <div key={_id} className="blog_box_mbl_view_different">
                                    <Link to={slug} style={{ color: 'inherit' }}>
                                        <div className="img_left_side_mbl_view">
                                            <img width={640} height={480} src={images} className="wp-post-image" alt={title} loading="lazy" /></div>
                                    </Link><div className="details_blog_mbl_view"><Link to={`/blog/${slug}`} style={{ color: 'inherit' }}>
                                        <h5 className="title_blog_details_mbl_view">{title}</h5>
                                        <div className="produce_by_name_mbl_view">
                                            BY {author ? author : "Anonymous"} </div>
                                        <div className="date_blog_mbl_view_diff">
                                            {moment(createdAt).format('ll')}  </div>
                                    </Link><div className="readmore_btn_blog_mbl_view"><Link to={`/blog/${slug}`} style={{ color: 'inherit' }}>
                                        <div className="views_blog_mobile_view">Views: <span><div className="pvc_clear" /><p className="pvc_stats total_only" data-element-id={143989} style={{}}><i className="pvc-stats-icon small" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" version={1.0} viewBox="0 0 502 315" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,332) scale(0.1,-0.1)" stroke="none"><path d="M2394 3279 l-29 -30 -3 -207 c-2 -182 0 -211 15 -242 39 -76 157 -76 196 0 15 31 17 60 15 243 l-3 209 -33 29 c-26 23 -41 29 -80 29 -41 0 -53 -5 -78 -31z" /><path d="M3085 3251 c-45 -19 -58 -50 -96 -229 -47 -217 -49 -260 -13 -295 52 -53 146 -42 177 20 16 31 87 366 87 410 0 70 -86 122 -155 94z" /><path d="M1751 3234 c-13 -9 -29 -31 -37 -50 -12 -29 -10 -49 21 -204 19 -94 39 -189 45 -210 14 -50 54 -80 110 -80 34 0 48 6 76 34 21 21 34 44 34 59 0 14 -18 113 -40 219 -37 178 -43 195 -70 221 -36 32 -101 37 -139 11z" /><path d="M1163 3073 c-36 -7 -73 -59 -73 -102 0 -56 133 -378 171 -413 34 -32 83 -37 129 -13 70 36 67 87 -16 290 -86 209 -89 214 -129 231 -35 14 -42 15 -82 7z" /><path d="M3689 3066 c-15 -9 -33 -30 -42 -48 -48 -103 -147 -355 -147 -375 0 -98 131 -148 192 -74 13 15 57 108 97 206 80 196 84 226 37 273 -30 30 -99 39 -137 18z" /><path d="M583 2784 c-38 -19 -67 -74 -58 -113 9 -42 211 -354 242 -373 16 -10 45 -18 66 -18 51 0 107 52 107 100 0 39 -1 41 -124 234 -80 126 -108 162 -133 173 -41 17 -61 16 -100 -3z" /><path d="M4250 2784 c-14 -9 -74 -91 -133 -183 -95 -150 -107 -173 -107 -213 0 -55 33 -94 87 -104 67 -13 90 8 211 198 130 202 137 225 78 284 -27 27 -42 34 -72 34 -22 0 -50 -8 -64 -16z" /><path d="M2275 2693 c-553 -48 -1095 -270 -1585 -649 -135 -104 -459 -423 -483 -476 -23 -49 -22 -139 2 -186 73 -142 361 -457 571 -626 285 -228 642 -407 990 -497 242 -63 336 -73 660 -74 310 0 370 5 595 52 535 111 1045 392 1455 803 122 121 250 273 275 326 19 41 19 137 0 174 -41 79 -309 363 -465 492 -447 370 -946 591 -1479 653 -113 14 -422 18 -536 8z m395 -428 c171 -34 330 -124 456 -258 112 -119 167 -219 211 -378 27 -96 24 -300 -5 -401 -72 -255 -236 -447 -474 -557 -132 -62 -201 -76 -368 -76 -167 0 -236 14 -368 76 -213 98 -373 271 -451 485 -162 444 86 934 547 1084 153 49 292 57 452 25z m909 -232 c222 -123 408 -262 593 -441 76 -74 138 -139 138 -144 0 -16 -233 -242 -330 -319 -155 -123 -309 -223 -461 -299 l-81 -41 32 46 c18 26 49 83 70 128 143 306 141 649 -6 957 -25 52 -61 116 -79 142 l-34 47 45 -20 c26 -10 76 -36 113 -56z m-2057 25 c-40 -58 -105 -190 -130 -263 -110 -324 -59 -707 132 -981 25 -35 42 -64 37 -64 -19 0 -241 119 -326 174 -188 122 -406 314 -532 468 l-58 71 108 103 c185 178 428 349 672 473 66 33 121 60 123 61 2 0 -10 -19 -26 -42z" /><path d="M2375 1950 c-198 -44 -350 -190 -395 -379 -18 -76 -8 -221 19 -290 114 -284 457 -406 731 -260 98 52 188 154 231 260 27 69 37 214 19 290 -38 163 -166 304 -326 360 -67 23 -215 33 -279 19z" /></g></svg></i> &nbsp;1,755&nbsp;</p><div className="pvc_clear" /></span></div>
                                    </Link><Link to={`/blog/${slug}`} title="May Tarot Reading Horoscope 2023 for Each Zodiac Sign" className="btn_redmore_click">Read Now &gt;</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </InfiniteScroll>

                    <div className="seo_section">
                        <h2>Astrology Blogs</h2>
                        <h4>Trending Astrology Topics &amp; Astrology News</h4>
                        <p>Have a problem? Astrotalk's astrology blog will help you find solutions to the
                            same. Or even if you simply seek to learn the hows and wows of astrology, then
                            again, the informative blogs brewed in this space using insights of the learned
                            <a href="https://astrotalk.com">astrologers</a> of Astrotalk can help you gain
                            much more than your seek.</p>
                        <p>Be it the remedies for Manglik dosh you need information for or home Vastu, right
                            from Vedic astrology blog to the daily <a href="https://astrotalk.com/horoscope/daily-horoscope">horoscope</a>, this
                            space is always brimming with stories that cover all the recent happenings in
                            the astrology world while trying to impart the best knowledge on astrological
                            concepts that keeps you asking for more.</p>
                        <h2>Astrology Information</h2>
                        <p>Astrology is a vast concept and even the slightest shift in astrological elements
                            like stars, planets, etc. can change a lot for you in terms of love, luck,
                            travel, career and more. So to keep yourself updated with such changes, you can
                            rely on these Indian astrology blogs.</p>
                        <p>Also, if any of the blogs in this section does not quench your thirst for
                            astrology information, you can always start a fruitful conversation in the
                            comment section of the blogs and directly get a reply from our astrologers. Fun
                            isn't it? You can also <a href="https://astrotalk.com/chat-with-astrologer">chat
                                with astrologer</a> or <a href="https://astrotalk.com/talk-to-astrologer">talk to astrologer</a> for
                            your future predictions.</p>
                    </div>
                    <div className="floatingIconBlog">
                        <div className="container">
                            <div className="contentFloatingIcon">
                                <div className="leftSideIcon">
                                    <img src="https://astrotalk.com/astrology-blog/wp-content/uploads/2022/05/WomenImg.png" alt="women pic" />
                                </div>
                                <div className="rightSideText">
                                    <h6>Got any question?</h6>
                                    <a href="https://astrotalk.onelink.me/3LHk/7jk1z2nd">Chat with
                                        Astrologer for <b>FREE</b></a>
                                </div>
                                <img className="closeIcon" src="https://astrotalk.com/astrology-blog/wp-content/uploads/2022/05/close.png" alt="close icon" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Mobile view blog section */}
            </section>
        </>
    )
}
