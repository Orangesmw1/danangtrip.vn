import React from "react";
import "./FeaturedTickets.css";
import BoxTicketContent from "./BoxTicketContent";

const FeaturedTickets = () => {
  return (
    <div className="featured-ticket">
      <div className="carousel mx-auto px-20">
        <h4 className="text-blackPanel">Vé điểm tham quan nổi bật</h4>
        <div className="box-show">
          <BoxTicketContent />
          <BoxTicketContent />
          <BoxTicketContent />
        </div>
      </div>
      <div className="box-more">
        <button className="btn-more">Xem thêm</button>
      </div>
    </div>
  );
};

export default FeaturedTickets;
