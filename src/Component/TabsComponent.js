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
                key={data.id}
                title={data.title}>
                <div className='row' key={data.id} style={{ padding: '20px' }}>
                  {data.locations.map((localtion) => {
                    return (
                      <div
                        key={localtion.id}
                        className='col-md-3 col-6 tabs-data'>
                        {localtion.name}
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
