export default function Details() {
  return (
    <>
      <div>
        <h1>Name</h1>
        <div>Pictures div</div>
        <div>
          <div className="main-content max-w-[1280px] px-[80px] ml-auto mr-auto flex">
            <div className="info-container">
              <section>
                <div>Room</div>
                <div>Bedroom</div>
                <div>Ratings</div>
              </section>
              <div className="flex border-t border-solid border-t-[rgb(221, 221, 221)]">
                <div className="host-photo"></div>
                <div className="host-info">
                  <div>Host name</div>
                  <div>Host description</div>
                </div>
              </div>
              <div className="highlights border-t border-solid border-t-[rgb(221, 221, 221)]">
                <section>
                  <div className="flex flex-col">
                    <div className="flex">
                      <img src="" alt="image 1" />
                      <div className="highlight-1">
                        <div>Room in farm stay</div>
                        <div>Your own home in room</div>
                      </div>
                    </div>
                    <div className="flex">
                      <img src="" alt="image 2" />
                      <div className="highlight-2">
                        <div>Mountain and valley views</div>
                        <div>Soak up during the stay</div>
                      </div>
                    </div>
                    <div className="flex">
                      <img src="" alt="image 3" />
                      <div className="highlight-3">
                        <div>X is a superhost</div>
                        <div>
                          Superhosts are experienced, highly rated hosts
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="about border-t border-solid border-t-[rgb(221, 221, 221)]">
                <div>About this place</div>
                <div>
                  <span>
                    <span>
                      It is an old traditional wooden house located in a
                      tranquil valley of Rakchham , a perfect stay option for
                      Artists and Serenity lovers...
                    </span>
                    <br />
                    <br />
                    <span className="mb-16">The space</span>
                    <br />
                    <span>
                      Our place is situated in a very isolated and serene
                      location. One can get the 360° view of the mountains from
                      here. The magical Baspa valley in the south and Shoshala
                      peak in the north add more colours to our place.
                    </span>
                  </span>
                </div>
              </div>
              <div className="amenities border-t border-solid border-t-[rgb(221, 221, 221)]">
                <section>
                  <div>What this place offers</div>
                  <div className="flex flex-wrap">
                    <div className="flex w-full">
                      <img src="" alt="a2" />
                      <div>River view</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a3" />
                      <div>Kitchen</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a4" />
                      <div>Dedicated workspace</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a5" />
                      <div>free parking</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a6" />
                      <div>Pets allowed </div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a7" />
                      <div>Paid washer</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a8" />
                      <div>Lock on bedroom door</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a9" />
                      <div>carbon monoxide alarm</div>
                    </div>
                    <div className="flex w-full">
                      <img src="" alt="a10" />
                      <div>smoke alarm</div>
                    </div>
                  </div>
                  <div className="show">
                    <button>Show all 47 amenities</button>
                  </div>
                </section>
              </div>
              <div className="availability-calendar border-t border-solid border-t-[rgb(221, 221, 221)]">
                <div>
                  <div>5 nights in delhi</div>
                  <div>7 Jan 2025 - 12 Jan 2025 </div>
                </div>
                <div>Calendar View</div>
              </div>
            </div>
            <div className="date-container relative">
              <div className="sticky top-[80px]">date container</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
