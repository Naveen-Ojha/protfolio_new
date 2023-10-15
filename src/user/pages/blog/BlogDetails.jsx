import { useEffect, useState } from "react";
import { apiEndPoint } from "../../../enviroment";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import categoryImg from "../../assets/images/blog/category.png";
import trendingImg from "../../assets/images/blog/trending.png";

export default function BlogDetails() {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const [state, setstate] = useState([]);
  const [category, setCategory] = useState([]);
  const [trending, setTrending] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function getBlogPost() {
      setLoading(true);
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${apiEndPoint}blog/single/${slug}`,
      };

      axios
        .request(config)
        .then((response) => {
          setstate(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
    getBlogPost();
  }, []);

  useEffect(() => {
    const getTrending = async () => {
      const res = await fetch(`${apiEndPoint}blog/pagination?&page=0&size=5`);
      const data = await res.json();
      setTrending(data.data);
    };

    getTrending();
  }, []);

  useEffect(() => {
    const getRecent = async () => {
      const res = await fetch(`${apiEndPoint}blog/pagination?&page=1&size=5`);
      const data = await res.json();
      setRecent(data.data);
    };

    getRecent();
  }, []);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiEndPoint}blog/category`,
    };

    axios
      .request(config)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { title, images, description, createdAt, author } = state;

  return (
    <>
      {loading ? (
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <div className="container rounded bg-white mt-5 mb-5 text-center">
            <CircularProgress color="success" />
          </div>
        </Stack>
      ) : (
        <section className="blog_section desktop_view_blog_section">
          <div className="content_blog_list">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <h1 className="blog_title_heading">{title}</h1>
                  <div className="blog_article">
                    <div className="col-md-12">
                      <div
                        className="img_blog_article"
                        style={{ marginBottom: "20px" }}
                      >
                        <img
                          width={640}
                          height={480}
                          src={images}
                          className="attachment-astrologyFeatureImage size-astrologyFeatureImage wp-post-image"
                          alt={title}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="addtoany_share_save_container addtoany_content addtoany_content_top">
                      <div
                        className="a2a_kit a2a_kit_size_ addtoany_list"
                        data-a2a-url="https://astrotalk.com/astrology-blog/may-tarot-reading-horoscope-2023-for-each-zodiac-sign/"
                        data-a2a-title="May Tarot Reading Horoscope 2023 for Each Zodiac Sign"
                      >
                        <a
                          className="a2a_button_whatsapp"
                          href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fastrotalk.com%2Fastrology-blog%2Fmay-tarot-reading-horoscope-2023-for-each-zodiac-sign%2F&linkname=May%20Tarot%20Reading%20Horoscope%202023%20for%20Each%20Zodiac%20Sign"
                          title="WhatsApp"
                          rel="nofollow noopener"
                          target="_blank"
                        >
                          <img
                            src="https://astrotalk.com/astrology-blog/wp-content/uploads/2022/04/whatsapp.png"
                            alt="WhatsApp"
                          />
                        </a>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                  <h4 className="blog_subheading_title">
                    Posted On -{" "}
                    <span className="hdweight">
                      {moment(createdAt).format("ll")}
                    </span>{" "}
                    | Posted By -
                    <span className="hdweight">
                      {" "}
                      <a
                        style={{ color: "inherit" }}
                        href="https://astrotalk.com/astrology-blog/author/shimonnaajaiingmail-com/"
                      >
                        {author ? author : "Anonymous"}
                      </a>
                    </span>
                    | Read By -
                    <span className="hdweight" style={{ marginLeft: "-5px" }}>
                      <div className="pvc_clear" />
                      <p
                        className="pvc_stats total_only"
                        data-element-id={143989}
                      >
                      </p>
                      <div className="pvc_clear" />
                    </span>
                  </h4>
                </div>
                <div className="col-md-3">
                  <div className="recently_posted_blogs">
                    <div className="heading_top_trending">
                      <div className="icon_img_trending">
                        <img
                          src={trendingImg}
                          height="100%"
                          width="100%"
                          alt="Untitled-2"
                        />
                      </div>
                      <div className="heading_name_trending">
                        <h4>Trending Now</h4>
                        <h6>Trending Stories</h6>
                      </div>
                    </div>
                    {trending.map((value) => {
                      const { _id, title, slug } = value;
                      return (
                        <Link
                          key={_id}
                          to={`/blog/${slug}`}
                          className="trending_link"
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="recently_posted_blogs">
                    <div className="heading_top_trending">
                      <div className="icon_img_trending">
                        <img
                          src={trendingImg}
                          height="100%"
                          width="100%"
                          alt="Untitled-2"
                        />
                      </div>
                      <div className="heading_name_trending">
                        <h4>Recent Blog</h4>
                        <h6>Recent Stories</h6>
                      </div>
                    </div>
                    {recent.map((value) => {
                      const { _id, title, slug } = value;
                      return (
                        <Link
                          key={_id}
                          to={`/blog/${slug}`}
                          className="trending_link"
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="categories_section">
                    <div className="heading_top_trending">
                      <div className="icon_img_trending">
                        <img
                          src={categoryImg}
                          height="100%"
                          width="100%"
                          alt="Untitled-2"
                        />
                      </div>
                      <div className="heading_name_trending">
                        <h4>Categories</h4>
                        <h6>Select Topic</h6>
                      </div>
                    </div>
                    <div className="catergories_items">
                      <div className="categories_link">
                        <a href="/blog" style={{ color: "#323232" }}>
                          Home
                        </a>
                      </div>
                      {category?.map((val) => {
                        return (
                          <div key={val._id} className="categories_link">
                            <a
                              href={`/blog/category/${val.slug}`}
                              style={{ color: "#323232" }}
                            >
                              {val.category}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
