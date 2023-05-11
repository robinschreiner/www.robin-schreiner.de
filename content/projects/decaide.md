---
category: Branding, Strategy, Concept, Design
title: decAIde App
subtitle: Help factory managers to act faster and better In stressful situations.
description: This App was the SIEMENS Zollhof Hackathon Winner in 2018 with its approach to not give factory managers more information or another dashboard but actionable insights and tips how to react IN THE MOMENT.
cover: /images/projects/decaide/thumbnail.jpg
---

# Challenge

In 2018, I joined a team at the Hackbay hackathon hosted by Zollhof in Nuremberg, Germany. My participation was spontaneously and I found myself integrated into an existing team with the goal of creating a Factory Manager that could alleviate some of the burdens of plant managers. The ultimate aim was to take the pressure off the factory managers and improve their day-to-day operations. Our team had access to measurement data from a machine connected to SIEMENS MindSphere by ASM Assembly Systems.

# Concept & Progress

During our visit to the Siemens plant in Amberg, we discovered that MindSphere generates an incredible amount of data in the digitalization of industrial plants. These data can be correlated, predictions can be made, and process chains can be digitally represented. However, the challenge lies in the overwhelming amount of data, which leads to a loss of clarity and the original purpose of a dashboard.

There are repetitive events and a limited number of decisions that are made based on these events. Currently, these decisions are made through manual (visual) interpretation of dashboards and are not systematically documented.

> "It's nice to have all those data but in the end I have to make the decision and have to rely on my experience and my experience alone"
>
> — Factory Manger

Therefore, our hypothesis is that if the underlying data, resulting decisions, and their consequences are systematically documented, our application, DECAIDE, could derive recommendations using intelligent algorithms, shorten decision-making processes, and connect the experiences of previous decision-makers. These predictions would become more accurate with each decision, as the success rate would be measured and evaluated against the recommended decision.

We combine Deep Learning, neural networks and the digitized knowledge of many factory managers, workers and experts in our recommendation AI.
Here, an approach in the form of "Deep Reinforcement Learning" is pursued. For this purpose, the actual state of the respective plants is recorded via data from MindSphere. Depending on the state of the plant, different recommendations for action can now be made, which are selected from a predefined discrete set and can be executed from the respective state. Now the different recommendations for action have to be weighted. This is done by approximating a value function that assigns a value to each state in which the plant can be. With the help of an artificial neural network, this value function can now be learned. Now, after each recommended action, the returned feedback is used to optimize this value function and thus also the accuracy of the recommendations.

![Alt](/images/projects/decaide/concept-overview.jpg 'Team in the phase of conception')

Every AI needs a certain learning phase. To train it in advance supervised learning is used. This is done with the "IIOT Tinder" function. For this, historical machine data and associated incidents are taken. These are now fed into the neural network. Now DECAIDE starts to generate recommendations and show them to the authorized persons. These decide in each case whether these generated recommendations are meaningful or not. After a certain time, the value function would be approximated well enough by the neural network to be applied in the field and further optimized with current machine data.
Each decision made is tracked according to defined success criteria and thus leads to increasingly accurate recommendations through reinforcement learning.

As the hackathon progressed, we continued to iterate and refine our tool, incorporating feedback from mentors and fellow participants. By the end of the hackathon, we had developed a functional prototype

# Design Process

I vectorized the images to create digital versions of the logo. During this phase, I worked closely with the client to try out different color schemes, experimenting with various combinations of natural colors and neon hues to draw attention to the brand. By involving potential clients, I gathered valuable insights that helped me refine the designs and effectively communicate the client's brand identity. After several iterations, we settled on a color scheme that effectively communicated the brand's identity and would stand out in the competitive market.

![Alt](/images/projects/decaide/design-phase.jpg 'Some Screens out of the Design phase')

The design process we followed involved adhering to the Siemens design guidelines while also ensuring that our application didn't look like a typical Siemens application. Throughout the hackathon, we kept in touch with our Siemens mentors, seeking their guidance and feedback on our progress.

Initially, we created a quick prototype to validate our concept. We then moved on to develop high-fidelity designs, while simultaneously working on developing the algorithm and app for our minimum viable product (MVP).

Our aim was to ensure that our product met the Siemens design standards, while also standing out and having its unique identity. By staying in touch with our Siemens mentors and keeping the guidelines in mind, we were able to strike a balance between adherence and innovation.

![Alt](/images/projects/decaide/design-overview.jpg 'image title')

In the and we had our two applications, on that is mainly used to create training data for our algoright - the IoTTinder - and the main application that is feed with 1. the MindSphere Date, Edge Detection and then Recommondations on how to react.
The dashboard is giving insights on how the Response times improved over time.

![Alt](/images/projects/decaide/design-details.jpg 'image title')

Read more abut the hackathon at medium https://zollhof.medium.com/hack-bay-2018-by-zollhof-tech-incubator-f7f34598b906
