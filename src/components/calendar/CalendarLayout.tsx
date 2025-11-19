import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiCalendar from "@/components/lofi/LofiCalendar";
import { calendarEvents } from "@/data/data.calendar";
import LofiHeading from "@/components/lofi/LofiHeading";

const layoutContainer = css`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;

const CalendarLayout: DCI = () => {
    return (
        <div className={layoutContainer}>
            <LofiHeading level={1}>Events Calendar</LofiHeading>
            <LofiCalendar events={calendarEvents} />
        </div>
    );
};

export default CalendarLayout;
