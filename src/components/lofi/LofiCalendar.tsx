import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { CalendarEvent } from "@/data/data.calendar";
import LofiHeading from "@/components/lofi/LofiHeading";
import { fontSize } from "@/styles/styling";

const styles = css`
  width: 100%;
  border: 1px solid var(--foreground);

  .header {
    display: flex;
    justify-content: space-between;
    padding: 16rem;
    border-bottom: 1px solid var(--foreground);
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-header {
    padding: 8rem;
    text-align: center;
    border-bottom: 1px solid var(--foreground);
    border-right: 1px solid var(--foreground);
    font-weight: bold;
    &:nth-child(7n) {
      border-right: none;
    }
  }

  .day {
    min-height: 100rem;
    padding: 8rem;
    border-bottom: 1px solid var(--foreground);
    border-right: 1px solid var(--foreground);
    position: relative;

    &:nth-child(7n) {
      border-right: none;
    }
  }

  .date {
    font-weight: bold;
    margin-bottom: 8rem;
    opacity: 0.5;
  }

  .event {
    background: var(--foreground);
    color: var(--background);
    padding: 4rem;
    margin-bottom: 4rem;
    ${fontSize(0.75)}
    cursor: pointer;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  .empty {
      background: rgba(0,0,0,0.05);
  }
`;

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Hardcoded for October 2025
// Oct 1 2025 is Wednesday (index 3)
// 31 days
const firstDayIndex = 3;
const daysInMonth = 31;

const LofiCalendar: DCI<{ events: CalendarEvent[] }> = ({ events }) => {
    const days = [];

    // Empty cells before start of month
    for (let i = 0; i < firstDayIndex; i++) {
        days.push(<div key={`empty-${i}`} className="day empty" />);
    }

    // Days of month
    for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = `2025-10-${i.toString().padStart(2, "0")}`;
        const dayEvents = events.filter(e => e.date === dateStr);

        days.push(
            <div key={i} className="day">
                <div className="date">{i}</div>
                {dayEvents.map(e => (
                    <div key={e.id} className="event" title={`${e.time} - ${e.location}`}>
                        {e.title}
                    </div>
                ))}
            </div>
        );
    }

    // Fill remaining cells to complete the grid
    const totalCells = Math.ceil((firstDayIndex + daysInMonth) / 7) * 7;
    for (let i = days.length; i < totalCells; i++) {
        days.push(<div key={`empty-end-${i}`} className="day empty" />);
    }

    return (
        <div className={styles}>
            <div className="header">
                <LofiHeading level={3}>October 2025</LofiHeading>
                <div>
                    &lt; Prev | Next &gt;
                </div>
            </div>
            <div className="grid">
                {daysOfWeek.map(d => (
                    <div key={d} className="day-header">{d}</div>
                ))}
                {days}
            </div>
        </div>
    );
};

export default LofiCalendar;
