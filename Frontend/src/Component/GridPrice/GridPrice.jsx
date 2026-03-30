import React, { useState } from "react";
import "./GridPrice.css";

const GridPrice = () => {
  const base = "gridPrice";

  const [filters, setFilters] = useState({
    price: [],
    language: [],
    format: [],
  });

  const filterGroups = [
    {
      key: "price",
      title: "Price",
      options: ["Free", "Subscription-based", "Paid"],
    },
    {
      key: "language",
      title: "Language",
      options: ["English", "Spanish", "French", "German"],
    },
    {
      key: "format",
      title: "Course Format",
      options: [
        "Programming",
        "Graphic Design",
        "Data Science",
        "Marketing",
        "Management",
      ],
    },
  ];

  const handleToggle = (groupKey, value) => {
    setFilters((prev) => {
      const exists = prev[groupKey].includes(value);

      return {
        ...prev,
        [groupKey]: exists
          ? prev[groupKey].filter((item) => item !== value)
          : [...prev[groupKey], value],
      };
    });
  };

  return (
    <aside className={base}>
      <div className={`${base}__card`}>
        {filterGroups.map((group, index) => (
          <div
            className={`${base}__group`}
            key={group.key}
          >
            <div className={`${base}__groupHead`}>
              <h3 className={`${base}__title`}>{group.title}</h3>
            </div>

            <div className={`${base}__divider`}></div>

            <div className={`${base}__options`}>
              {group.options.map((option) => {
                const checked = filters[group.key].includes(option);

                return (
                  <label className={`${base}__option`} key={option}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleToggle(group.key, option)}
                      className={`${base}__input`}
                    />
                    <span className={`${base}__box`}></span>
                    <span className={`${base}__label`}>{option}</span>
                  </label>
                );
              })}
            </div>

            {index !== filterGroups.length - 1 && (
              <div className={`${base}__space`}></div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default GridPrice;