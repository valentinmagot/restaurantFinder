<template>
  <datetime format="MM/DD/YYYY" width="300px" ></datetime>
</template>

<script>
import datetime from 'vuejs-datetimepicker';

export default{
    name: "Calendar",
    components: {
        datetime,
    },
}

</script>


