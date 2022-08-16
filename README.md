# ReactJS Create Dynamically Reusable Components

Tutorial: [https://www.youtube.com/watch?v=L88gjI_dIU4](https://www.youtube.com/watch?v=L88gjI_dIU4)

![example](./images/ex1.png)

#### Sample data
```
export const experiences = [
  {
    companyName: "Google",
    title: "Backend Developer",
    jobDescription: "I am developing backend",
    startDate: "2019",
    endDate: "present",
  },
  {
    companyName: "Facebook",
    title: "Fullstack Developer",
    jobDescription: "I was working on Facebook's internal platform",
    startDate: "2018",
    endDate: "2019",
  },
  {
    companyName: "X Company",
    title: "Intern",
    jobDescription: "I was intern in this company",
    startDate: "2017",
    endDate: "2018",
  },
];

```


#### Code
```
	<div>
      {experiences.map((experience, index) => {
        return <ExperienceItem key={index} experience={experience} />;
      })}
    </div>

```



### `npm install`

### `npm start`

