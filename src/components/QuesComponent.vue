<script>
export default {
  data() {
    return {
      QandA: [
        {
          showAnswer: false,
          key: 1,
          question: "How many team members can I invite?",
          answer:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        },
        {
          showAnswer: true,
          key: 2,
          question: "What is the maximum file upload size?",
          answer:
            " No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
          showAnswer: false,
          key: 3,
          question: "How do I reset my password?",
          answer:
            "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        },
        {
          showAnswer: false,
          key: 4,
          question: "Can I cancel my subscription?",
          answer:
            "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
          showAnswer: false,
          key: 5,
          question: "Do you provide additional support?",
          answer:
            "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        }
      ]
    };
  },

  methods: {
    handleAnswer(QandA) {
      QandA.showAnswer = !QandA.showAnswer;
    }
  }
};
</script>


<template>
  <div class="w-5/6 divide-y-2 space-y-4">
    <div class="pt-4" v-for="QandA in QandA" v-bind:key="QandA.key">
      <div class="flex justify-between items-center cursor-pointer space-x-3" @click="handleAnswer(QandA)">
        <h3
          class="text-sm text-Very-dark-desaturated-blue hover:text-Soft-red"
          :class="{[`font-bold `] : QandA.showAnswer}"
        >{{QandA.question}}</h3>
        <img
          src="../assets/icon-arrow-down.svg"
          alt="arrow"
          :class="{[`rotate-180`] : QandA.showAnswer}"
          class="h-3"
        />
      </div>
      <div
        class="text-sm text-Dark-grayish-blue pt-2"
        :class="{hidden : !QandA.showAnswer}"
      >{{QandA.answer}}</div>
    </div>
  </div>
</template>