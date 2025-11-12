import React, { useState } from "react";
import "./EventsSection.css";
import Event1 from "./Event1";
import Event2 from "./Event2";
import Event3 from "./Event3";
import Event4 from "./Event4";
import Event5 from "./Event5";
import Event6 from "./Event6";
import Event7 from "./Event7";

const events = [
  {
    id: 1,
    date: "14 Jan",
    title: "DISTRICT LEVEL RED RUN MARATHON",
    image: "events1.jpg",
    link: "#",
    component: Event1
  },
  {
    id: 2,
    date: "14 Feb",
    title: "விழிப்புணர்வு நிகழ்ச்சி",
    image: "events2.png",
    link: "#",
    component: Event2
  },
  {
    id: 3,
    date: "05 Nov",
    title: "BONAFIDE REQUEST FORM",
    image: "events3.jpeg",
    link: "#",
    component: Event3
  },
  {
    id: 4,
    date: "17 Jan",
    title: "AICTE Mandatory Disclosure",
    image: "events4.png",
    link: "#",
    component: Event4
  },
  {
    id: 5,
    date: "10 Jul",
    title: "Fees Structure : 2025 – 2026",
    image: "events5.jpeg",
    link: "#",
    component: Event5
  },
  {
    id: 6,
    date: "10 Jul",
    title: "Admission 2025-2026",
    image: "events6.jpeg",
    link: "#",
    component: Event6
  },
  {
    id: 7,
    date: "22 Aug",
    title: "Antidrug awareness programme",
    image: "events7.jpg",
    link: "#",
    component: Event7
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToGallery = () => {
    setSelectedEvent(null);
  };

  const EventComponent = selectedEvent ? selectedEvent.component : null;

  return (
    <div className="events-section">
      {/* Banner with Overlay Content */}
      <div className="events-banner">
        <img src="bread.jpg" alt="Events Banner" className="banner-image" />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>{selectedEvent ? "Event Details" : "Events Gallery"}</h1>
            <p>
              Home / Events Gallery
              {selectedEvent && (
                <span className="event-detail-link"> / {selectedEvent.title}</span>
              )}
            </p>
            {selectedEvent && (
              <button className="back-button" onClick={handleBackToGallery}>
                ← Back to Gallery
              </button>
            )}
          </div>
        </div>
      </div>

      {!selectedEvent ? (
        /* Events Grid */
        <div className="events-container">
          <div className="events-grid">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                {/* Event Image Container with Date Badge */}
                <div className="event-image-container">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="event-image" 
                  />
                  
                  {/* Date Badge - Top Left Corner with white background and red text */}
                  <div className="date-badge">
                    <span className="day">{event.date.split(" ")[0]}</span>
                    <span className="month">{event.date.split(" ")[1]}</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <a 
                    href={event.link} 
                    className="event-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEventClick(event);
                    }}
                  >
                    View Event →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Render the specific event component */
        <EventComponent />
      )}
    </div>
  );
};

export default EventsSection;