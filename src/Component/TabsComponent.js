import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './tabs.css';

export default function TabsComponent({ data }) {
  return (
    <div style={{ display: 'block' }}>
      <Tabs defaultActiveKey='1'>
        {data &&
          data.map((data) => {
            return (
              <Tab
                className='tab--header-links'
                eventKey={data.id}
                key={data.title}
                title={data.title}>
                <div className='row' key={data.title} style={{ padding: '20px' }}>
                  {data.locations.map((locations) => {
                    return (
                      <div
                        key={locations.key}
                        className='col-md-3 col-6 tabs-data'>
                        {locations.name}
                      </div>
                    );
                  })}
                </div>
              </Tab>
            );
          })}
      </Tabs>
    </div>
  );
}
