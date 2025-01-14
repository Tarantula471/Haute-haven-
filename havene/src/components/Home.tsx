import { useState } from "react";
import home from "../assets/home.svg";
import { slides } from "../data.json";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const [imageIdx, setImageIdx] = useState(0);

  const showPreviousImg = () => {
    setImageIdx((prevIdx) => {
      if (prevIdx === 0) {
        return slides.length - 1;
      }
      return prevIdx - 1;
    });
  };

  const showNextImg = () => {
    setImageIdx((prevIdx) => {
      if (prevIdx === slides.length - 1) {
        return 0;
      }
      return prevIdx + 1;
    });
  };

  return (
    <>
      <div className="categories h-[90px]">
        <div className="flex ps-4 pe-4">
          <div className="arrow">
            <div className="flex scroll-btn">
              <button>Previous</button>
            </div>
          </div>
          <div className="categories-div grow">
            {Array.from({ length: 10 }).map(() => (
              <label>
                <img src={home} alt="home image" />
                <div>Home</div>
              </label>
            ))}
          </div>
          <div className="arrow">
            <div className="flex scroll-btn">
              <button>Next</button>
            </div>
          </div>
          <div className="filters">
            <button>Filters</button>
          </div>
        </div>
      </div>
      <div className="destinations ps-8 pe-8">
        <div className="destinations-container">
          <div className="destination-card">
            <div className="carousel-wrapper">
              <div className="carousel">
                {slides.map((slide, index) => (
                  <>
                    <Link to={`/details/${index}`} target="_blank">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        key={slide.src}
                        style={{ translate: `${-100 * imageIdx}%` }}
                      />
                    </Link>
                  </>
                ))}
                <button onClick={showPreviousImg} className="arrow arrow-left">
                  <FaArrowLeft />
                </button>
                <button onClick={showNextImg} className="arrow arrow-right">
                  <FaArrowRight />
                </button>
              </div>
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    className="dots-btn"
                    key={index}
                    onClick={() => setImageIdx(index)}
                  >
                    <span
                      className={`${
                        index === imageIdx ? "dot-span" : "dot-disabled"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400"
              alt=""
            />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">
                From <span>$25</span>
              </p>
              <button className="button" data-type="outline">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
