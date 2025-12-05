import { CSSResultGroup, css } from 'lit';

export const styles: CSSResultGroup = css`
	.cal-card {
		cursor: default;
		padding: 16px;
		height: var(--card-height);
		overflow: auto;
	}

	/* START HEADER */
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		vertical-align: middle;
		align-items: center;
		margin: 0 8px 0 2px;
	}
	.header-name {
		font-family: var(--paper-font-headline_-_font-family);
		-webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
		font-size: var(--paper-font-headline_-_font-size);
		font-weight: var(--paper-font-headline_-_font-weight);
		letter-spacing: var(--paper-font-headline_-_letter-spacing);
		line-height: var(--paper-font-headline_-_line-height);
		text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
		opacity: var(--dark-primary-opacity);
		padding: 4px 8px 12px 0px;
		float: left;
	}
	.header-date {
		font-size: var(--paper-font-headline_-_font-size);
		font-size: 1.3rem;
		font-weight: 400;
		color: var(--primary-text-color);
		padding: 4px 8px 12px 0px;
		line-height: var(--paper-font-headline_-_line-height);
		float: right;
	}
	.header-name.compact,
	.header.compact,
	.header-date.compact {
		font-size: 1rem;
		padding: 1px !important;
	}
	/* END HEADER */

	/* START EVENT MODE */
	/* Day container */
	section.day-container {
		display: grid;
		grid-template-columns: 0.5fr 2fr;
		grid-gap: 10px;
		color: var(--primary-text-color);
		padding: 2px 0 4px 0;
	}
	section.day-container:not(:first-child) {
		border-top: 1px solid;
	}

	/* Day date display (shown once per day) */
	time.day-date {
		grid-column: 1;
		grid-row: 1;
		justify-content: center;
		display: flex;
		flex-direction: row;
		gap: 4px;
		align-self: start;
	}
	time.day-date .day,
	time.day-date .month,
	time.day-date .year {
		display: inline-block;
	}

	/* Day events container */
	div.day-events {
		grid-column: 2;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	/* Individual event */
	article.event {
		color: var(--primary-text-color);
	}
	article.event.last-event {
		padding-bottom: 8px;
	}
	article.event.compact {
		padding: 1px;
		vertical-align: top;
	}

	/* Week number */
	.week-number {
		color: var(--primary-color);
		border-radius: 5px;
		border: 2px solid;
		margin: 5px 0;
		width: 6em;
		text-align: center;
	}

	/* Event content section */
	section.event-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	section.event-content.dimmed {
		opacity: var(--finished-event-opacity);
		filter: var(--finished-event-filter);
	}

	/* Event header and footer */
	header.event-header,
	footer.event-footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	/* Event title */
	.event-title {
		user-select: text;
	}
	.event-title.running {
		user-select: text;
	}
	.event-title.Calendar {
		display: inline-block;
	}

	/* Event meta (location, calendar name, time) */
	aside.event-meta {
		text-align: right;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 2px;
	}

	/* Location */
	.event-location {
		user-select: text;
		overflow-wrap: anywhere;
	}
	.event-location-icon {
		--mdc-icon-size: 15px;
		color: var(--location-icon-color);
		height: 15px;
		width: 15px;
		margin-top: -2px;
	}
	.location-link {
		text-decoration: none;
		color: var(--accent-color);
		font-size: var(--location-link-size);
		user-select: text;
	}

	/* Calendar name */
	span.calendar-name {
		color: var(--cal-color);
		display: flex;
		align-items: center;
		gap: 4px;
	}
	span.calendar-name ha-icon {
		--mdc-icon-size: 15px;
	}

	/* Time displays */
	time.event-time,
	.hours {
		color: var(--time-color);
		font-size: var(--time-size);
		display: inline-block;
	}
	time.relative-time {
		color: var(--time-color);
		font-size: var(--time-size);
		padding-left: 5px;
	}

	/* Event description */
	.event-description {
		display: flex;
		justify-content: space-between;
		padding: 0px 5px 0 5px;
		color: var(--description-color);
		font-size: var(--description-size);
		overflow-wrap: anywhere;
		user-select: text;
	}

	/* Hidden events notice */
	.hidden-events {
		color: var(--primary-text-color);
	}

	/* Legacy support for table daywrap */
	.daywrap > td {
		padding-top: 8px;
	}

	/* Event separator line */
	hr.event-separator {
		color: var(--event-bar-color);
		border-color: var(--event-bar-color);
		margin: -8px 0px 2px 0px;
		border-width: 2px 0 0 0;
	}

	/* Progress bar */
	progress {
		border-radius: 2px;
		width: 100%;
		height: 3px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
	}
	progress::-webkit-progress-bar {
		background-color: var(--progress-bar-bg-color);
		border-radius: 2px;
	}
	progress::-webkit-progress-value {
		background-color: var(--progress-bar-color);
		border-radius: 2px;
	}
	/* END EVENT MODE */

	ha-button-toggle-group {
		color: var(--primary-color);
	}

	.calTitleContainer {
		padding: 0px 8px 8px 8px;
	}

	.calIconSelector {
		--mdc-icon-button-size: var(--button-toggle-size, 48px);
		--mdc-icon-size: var(--button-toggle-icon-size, 24px);
		border-radius: 4px 4px 4px 4px;
		border: 1px solid var(--primary-color);
		float: right;
		display: inline-flex;
		text-align: center;
	}
	.calDateSelector {
		--mdc-icon-button-size: var(--button-toggle-size, 48px);
		--mdc-icon-size: var(--button-toggle-icon-size, 24px);
		display: inline-flex;
		text-align: center;
	}
	div.calIconSelector ha-icon-button,
	div.calDateSelector ha-icon-button {
		color: var(--primary-color);
	}
	div.calDateSelector .prev {
		border: 1px solid var(--primary-color);
		border-radius: 3px 0px 0px 3px;
	}
	div.calDateSelector .date {
		border: 1px solid var(--primary-color);
		border-radius: 0px 0px 0px 0px;
		padding: 4px 2px 2px 4px;
	}
	div.calDateSelector .next {
		border: 1px solid var(--primary-color);
		border-radius: 0px 4px 4px 0px;
	}

	ha-icon-button {
		--mdc-icon-size: 20px;
		--mdc-icon-button-size: 25px;
	}

	table.cal {
		margin-left: 0px;
		margin-right: 0px;
		border-spacing: 10px 5px;
		border-collapse: collapse;
		width: 100%;
		table-layout: fixed;
	}

	thead th.cal {
		color: var(--secondary-text-color);
		border: 1px solid --cal-border-color;
		font-size: 11px;
		font-weight: 400;
		text-transform: uppercase;
	}

	td.cal {
		padding: 5px 5px 5px 5px;
		border: 1px solid var(--cal-grid-color);
		text-align: center;
		vertical-align: middle;
		width: 100%;
		color: var(--cal-day-color);
	}
	td.cal.clicked {
		background-color: var(--cal-active-event-bg);
	}

	.calDay {
		height: 38px;
		font-size: 95%;
		max-width: 38px;
		margin: auto;
	}

	.calDay .iconDiv {
		white-space: nowrap;
	}

	.calendar-icon-container {
		display: inline-block;
		margin-right: 10px; /* adjust this value to fit your layout */
	}

	.calendar-icon-container:nth-child(4n) {
		margin-right: 0;
	}

	.currentDay {
		position: relative;
		width: 20px;
		height: 20px;
		background-color: var(--primary-color);
		color: var(--text-primary-color) !important;
		text-align: center;
		line-height: 20px;
		border-radius: 50%;
		display: inline-block;
	}

	.weekendSat {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.weekendSun {
		background-color: rgba(255, 255, 255, 0.15);
	}

	.differentMonth {
		opacity: 0.35;
	}

	tr.cal {
		width: 100%;
	}

	.calTableContainer {
		width: 100%;
	}

	.summary-div {
		font-size: 90%;
	}

	.summary-event-div {
		padding-top: 3px;
	}
	.summary-event-div.dimmed {
		opacity: var(--finished-event-opacity);
		filter: var(--finished-event-filter);
	}

	.bullet-event-div-accepted {
		-webkit-border-radius: 8px;
		border-radius: 8px;
		border: 4px solid;
		height: 0;
		width: 0;
		display: inline-block;
		vertical-align: middle;
	}

	.bullet-event-div-declined {
		-webkit-border-radius: 8px;
		border-radius: 8px;
		border: 1px solid;
		height: 6px;
		width: 6px;
		display: inline-block;
		vertical-align: middle;
	}

	.bullet-event-span {
		overflow: hidden;
		white-space: nowrap;
		display: inline-block;
		vertical-align: middle;
		margin: 0 5px;
		text-decoration: none !important;
	}

	.summary-fullday-div-accepted {
		-webkit-border-radius: 5px;
		border-radius: 5px;
		border: 2px solid;
		border-left: 7px solid;
		padding: 0 4px;
		margin: 5px 0;
		line-height: 16px;
	}
	.summary-fullday-div-accepted.dimmed,
	.summary-fullday-div-declined.dimmed {
		opacity: var(--finished-event-opacity);
		filter: var(--finished-event-filter);
	}

	.summary-fullday-div-declined {
		-webkit-border-radius: 5px;
		border-radius: 5px;
		border: 1px solid;
		padding: 0 4px;
		margin: 5px 0;
		height: 18px;
		line-height: 16px;
	}

	.calDescription {
		display: flex;
		justify-content: space-between;
		padding: 0px 5px 0 5px;
		color: var(--description-color);
		font-size: var(--description-size);
	}

	.calMain {
		flex-direction: row nowrap;
		display: inline-block;
		vertical-align: top;
	}

	.calIcon {
		--mdc-icon-size: 10px;
		width: 10px;
		height: 10px;
		padding-top: 0px;
		margin-top: -10px;
		margin-right: -1px;
		margin-left: -1px;
	}

	.event-icon {
		--mdc-icon-size: 15px !important;
		padding-top: 0px;
		margin-top: -10px;
		margin-right: -1px;
		margin-left: -1px;
	}

	.loader {
		border: 4px solid #f3f3f3;
		border-top: 4px solid grey;
		border-radius: 50%;
		width: 14px;
		height: 14px;
		animation: spin 2s linear infinite;
		float: left;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
