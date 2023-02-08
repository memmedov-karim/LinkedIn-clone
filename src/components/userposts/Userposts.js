import React from "react";
import "./userposts.css";
import { BsThreeDots, BsFillHandThumbsUpFill, BsImage } from "react-icons/bs";
import {
  FaPlus,
  FaRegHandPointLeft,
  FaRegCommentDots,
  FaPaperPlane,
  FaRetweet,
  FaLaugh,
} from "react-icons/fa";
export default function Userposts() {
  const [readmore, setreadmore] = React.useState(false);
  const [isComment, setiscomment] = React.useState(false);
  const openReadMore = () => {
    setreadmore(!readmore);
  };
  const writeComment = () => {
    setiscomment(!isComment);
  };
  return (
    
    <div style={{ color: "white" }} className="userposts">
      <div className="postheader">
        <div className="commentnamepic">
          <img
            className="usersharepostcomment"
            alt="userpic"
            src="https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg"
          />
          <span style={{ marginLeft: "5px", fontSize: "14px" }}>
            Karim{" "}
            <small color="hsl(0 -13% 100% / 0.6)">commented on this post</small>
          </span>
        </div>
        <BsThreeDots className="userpostheadericon" />
      </div>
      <hr />
      <div className="postownerheader">
        <div className="postownerinfo">
          <div className="postownerpicanddesc">
            <img
              className="postownerimage"
              alt="userpic"
              src="https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg"
            />
            <div className="userinfonearimg">
              <div className="usernamenearimg">
                Karim Mammadov{" "}
                <span style={{ color: "hsl(0 -13% 100% / 0.6)" }}>. 2nd</span>
              </div>
              <div style={{ fontSize: "13px" }} className="userworkplace">
                Software engineer at google
              </div>
              <div
                style={{ fontSize: "13px", color: "hsl(0 -13% 100% / 0.6)" }}
                className="userposteditedinfo"
              >
                4d . edited .
              </div>
            </div>
          </div>
          <button className="postownerfollowbtn">
            <FaPlus />
            <span>Follow</span>
          </button>
        </div>
        <div className="postinfo">
          <div className="userposttitle">
            Hello every one this is my first post{" "}
            <span
              onClick={openReadMore}
              style={{ color: "#70b5f9", cursor: "pointer" }}
            >
              {readmore ? "short..." : "read more..."}
            </span>
          </div>
          {readmore && (
            <div className="userposttext">
              “Ultra Technologies” şirkəti Java developer üzrə təcrübə proqramı
              elan edir. Tələblər: - Müvafiq sahə üzrə ali təhsil -Minimal
              proqramlashdirma bilikleri -Java uzre fundamental bilikleri
              olanlara ustunluk verilir Təcrübə proqramını uğurla başa vuran
              təcrübəçilər sonda işlə təmin olunaraq Ultra Technologies
              ailəsinin bir üzvü olacaqlar! Maraqlananlar müraciət üçün CV-nizi
              “ Java Developer Intern ” mövzusu ilə hr@ultra.az e-mail ünvanına
              göndərməyiniz xahiş olunur.
            </div>
          )}
          <div className="userimagecontent">
            <img
              className="userimagecontentimage"
              alt="userimg"
              src="https://img.freepik.com/premium-vector/hiring-recruitment-open-vacancy-design-info-label-template-we-are-hiring-join-our-team-announcement_384372-303.jpg?w=2000"
            />
          </div>
          <div className="userpostlikeandcomments">
            <div className="userpostlikes">
              <BsFillHandThumbsUpFill style={{ color: "#70b5f9" }} />

              <span className="userpostlike">
                Akbar Hasanov and 105 other...
              </span>
            </div>
            <div className="commentsandrepost">
              <span onClick={writeComment} className="userpostcommnets">200 comments</span> .{" "}
              <span className="userpostreposts">3 repost</span>
            </div>
          </div>
          <hr />
          <div className="userpostactions">
            <button className="userpostactionbtn">
              <FaRegHandPointLeft />
              <span>Like</span>
            </button>
            <button onClick={writeComment} className="userpostactionbtn">
              <FaRegCommentDots />
              <span>{isComment ? "close" : "Comment"}</span>
            </button>
            <button className="userpostactionbtn">
              <FaRetweet />
              <span>Repost</span>
            </button>
            <button className="userpostactionbtn">
              <FaPaperPlane />
              <span>Send</span>
            </button>
          </div>
          {isComment && (
            <div className="writecommenttouserpost">
              <div className="userpostcommentinput">
                <img
                  className="yourimage"
                  alt="yourimage"
                  src="https://img.freepik.com/premium-vector/hiring-recruitment-open-vacancy-design-info-label-template-we-are-hiring-join-our-team-announcement_384372-303.jpg?w=2000"
                />
                <div className="commentinput">
                  <input type="text" placeholder="Add a comment..." />
                  <div className="smilephoto">
                    <FaLaugh style={{ cursor: "pointer" }} />
                    <BsImage style={{ cursor: "pointer" }} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="userpostcommentscontent">
            <div className="usercomment">
              <img
                className="yourimage"
                alt="yourimage"
                src="https://img.freepik.com/premium-vector/hiring-recruitment-open-vacancy-design-info-label-template-we-are-hiring-join-our-team-announcement_384372-303.jpg?w=2000"
              />
              <div className="commentinfo">
                <div className="usercommnetname">Karim Mammadov</div>
                <div className="usercommnetownerwork">Full stack developer</div>
                <div className="commnettext">
                  “Ultra Technologies” şirkəti Java developer üzrə təcrübə
                  proqramı elan edir. Tələblər: - Müvafiq sahə üzrə ali təhsil
                  -Minimal proqramlashdirma bilikleri -Java uzre fundamental
                  bilikleri olanlara ustunluk verilir Təcrübə proqramını uğurla
                  başa vuran təcrübəçilər
                </div>
              </div>
            </div>
            {isComment && <div className="usercomment">
              <img
                className="yourimage"
                alt="yourimage"
                src="https://pps.whatsapp.net/v/t61.24694-24/287508032_397451712433529_6839802806152756696_n.jpg?ccb=11-4&oh=01_AdQNRlskek3ddmNvpsUkrFeTA5U53vfvcDPTh7KIZ0S-TA&oe=63F0936A"
              />
              <div className="commentinfo">
                <div className="usercommnetname">Hasanrza Hasanli</div>
                <div className="usercommnetownerwork">Front end developer</div>
                <div className="commnettext">
                  “Ultra Technologies” şirkəti Java developer üzrə təcrübə
                  proqramı elan edir. Tələblər: - Müvafiq sahə üzrə ali təhsil
                  -Minimal proqramlashdirma bilikleri -Java uzre fundamental
                  bilikleri olanlara ustunluk verilir Təcrübə proqramını uğurla
                  başa vuran təcrübəçilər
                </div>
              </div>
            </div>}
            {isComment && <div className="usercomment">
              <img
                className="yourimage"
                alt="yourimage"
                src="https://img.freepik.com/premium-vector/hiring-recruitment-open-vacancy-design-info-label-template-we-are-hiring-join-our-team-announcement_384372-303.jpg?w=2000"
              />
              <div className="commentinfo">
                <div className="usercommnetname">Memmedli memmed</div>
                <div className="usercommnetownerwork">Python developer</div>
                <div className="commnettext">
                  “Ultra Technologies” şirkəti Java developer üzrə təcrübə
                  proqramı elan edir. Tələblər: - Müvafiq sahə üzrə ali təhsil
                  -Minimal proqramlashdirma bilikleri -Java uzre fundamental
                  bilikleri olanlara ustunluk verilir Təcrübə proqramını uğurla
                  başa vuran təcrübəçilər
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
