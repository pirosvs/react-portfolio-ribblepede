import React from 'react';

// Handing our function our props for it to use
// FIX: NEED TO PUT IN ONE ARRAY OR FIGURE OUT HOW TO MAKE ANOTHER LIST/ DIV W/O ERRORS
export default function Resume({frontEndProficiencies, backEndProficiencies}) {
    return (
        <ul className="list-group">
            {/* Mapping our front end props by id */}
          {props.frontEndProficiencies.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.skill}
            </li>
          ))}
        </ul>
    );
}

// needs reusable map for uhh projects ive done and a downloadable link for resume

const frontEndProficiencies = [
    {
        id: 1,
        skill: "HTML"
    },
    {
        id: 2,
        skill: "CSS"
    },
    {
        id: 3,
        skill: "JavaScript"
    },
    {
        id: 4,
        skill: "CSS"
    },
    {
        id: 5,
        skill: "jQuery"
    },
    {
        id: 6,
        skill: "Responsive Design"
    },
    {
        id: 7,
        skill: "React"
    },
    {
        id: 8,
        skill: "Bootstrap"
    },
    {
        id: 9,
        skill: "Materialize"
    },
    {
        id: 10,
        skill: "Skeleton"
    }
];

const backEndProficiencies = [
    {
        id: 1,
        skill: "APIs"
    },
    {
        id: 2,
        skill: "Node"
    },
    {
        id: 3,
        skill: "Express"
    },
    {
        id: 4,
        skill: "MySQL Sequelize"
    },
    {
        id: 5,
        skill: "REST"
    }
];