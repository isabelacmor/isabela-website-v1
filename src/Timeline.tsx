import * as React from 'react';
import './Timeline.css';

class Timeline extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <div id="timelineRoot">
            <div className="container">

                <div className="timeline-item" date-is='September 2018'>
                    <h1>Mentored at ShellHacks</h1>
                    <p>
                        Gave various workshops, including "Static Website Deployment in Azure" and <a href="https://github.com/isabelacmor/fiu-interviewprep">"Demystifying the Tech Interview"</a>.
                    </p>
                </div>

                <div className="timeline-item" date-is='July 2018'>
                    <h1>Spoke at Seattle Keyboard Meetup</h1>
                    <p>
                        <a href="https://ckeys.org/events/smkmeetup/#presentations">"Anatomy of a Mechanical Keyboard"</a>, later <a href="https://www.massdrop.com/talk/10016/anatomy-of-a-mechanical-keyboard">featured on Massdrop</a>.
                    </p>
                </div>

                <div className="timeline-item" date-is='January 2018'>
                    <h1>Started Masters Program</h1>
                    <p>
                        Pursuing my Masters in Human Computer Interaction at Iowa State University while working full time.
                    </p>
                </div>
	
                <div className="timeline-item" date-is='August 2016'>
                    <h1>Joined Microsoft</h1>
                    <p>
                        Fresh out of college, I started on the Microsoft Edge team. Currently a Software Engineer 2, I work closely with designers and PMs to take a feature idea through ideation, mockups, user studies, and development.
                    </p>
                </div>
                
                <div className="timeline-item" date-is='May 2016'>
                    <h1>Graduated from University of Central Florida</h1>
                    <p>
                        Graduated with a Bachelors in Computer Science.
                    </p>
                </div>

                <div className="timeline-item" date-is='Summer 2015'>
                    <h1>Interned at Salesforce</h1>
                    <p>
                        Built fit-and-finish UI and decided backend work was not for me.
                    </p>
                </div>

                <div className="timeline-item" date-is='January 2015'>
                    <h1>Joined SavvySuit</h1>
                    <p>
                        First (and only) frontend developer at Orlando legal startup. Part of <a href="https://www.orlandosentinel.com/business/technology/tech_check/os-starter-studio-fourth-class-debut-20150713-post.html">Starter Studio's fourth accelerator class</a>.
                        Created mockups, ran user studies, developed client-side Chrome app.
                    </p>
                </div>

                <div className="timeline-item" date-is='Summer 2014'>
                    <h1>Interned at Google</h1>
                    <p>
                        Developed campaign stats UI for Google AdWords <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.adwords&hl=en_US">Android app</a>.
                    </p>
                </div>

                <div className="timeline-item" date-is='January 2013'>
                    <h1>Joined UCF programming team</h1>
                    <p>
                        First <a href="https://today.ucf.edu/ucf-sends-first-all-female-team-to-super-bowl-of-programming/">all-women programming team</a> and placed third in the senior division at my first competition.
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Timeline;