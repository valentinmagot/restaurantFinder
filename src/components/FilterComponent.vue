
<template>
    <div class="container" >
        <div class="label">
            <h4>Filter</h4>
        </div>
        <label class="price-label" for="score">Price</label>
       <div class="slider-price">
            <p class="min">$</p>
                <input :value='value.price' id='price' type="range" min="1" max="4" @input="update('price', $event.target.value)">
            <p class="max">$$$$</p>
       </div>
       <label class="score-label" for="score">Score</label>
       <div class="slider-score">
            <p class="min">0</p>
                <input :value="value.rating" id='score' type="range" min="0" max="5" @input="update('rating', $event.target.value)" >
            <p class="max">5</p>
       </div>
       <div class="selecter">
           <label for="guests">Guests</label>
          <input :value='value.guests' type="number" name="guests" min="1" @input="update('guests', $event.target.value)">
       </div>
       <div class="typeOfFood">
           <label for="type_of_food">Type of food</label>
          <input placeholder="Enter a type of food" :value='value.cuisine' type="text" name="cuisine" min="1" @input="update('cuisine', $event.target.value)">
       </div>
    </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  props: [
      "value"
  ],
  methods: {
      update(key, value){
          value = value != undefined ? value : '';
          this.$emit('input', {...this.value, [key]: value})
      }
  },

}
</script>

<style scoped lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import '@/assets/css/main.scss';
*{
    box-sizing: border-box;
}
.container{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    // width: 250px; //modify
    // height: 300px; //modify
    border: 1px solid $base-color;
    border-radius: 3px;
    background-color: white;
    display: flex;
    color:black;
    box-shadow: $base-shadow;
    padding: 10px;
}
.label {
    // height: 10px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: red;
    text-transform: uppercase;
    color: black;
}

.label h4 {
    margin: 0;
}

.slider-price {
height: 60px;
padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  -webkit-appearance: none;
  width: 100%;
//   background: #d3d3d3;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider-score {
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  -webkit-appearance: none;
  width: 100%;
//   background: #d3d3d3;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

#price {
    width: 90%;
}

#score {
    width: 90%;
}

.selecter {
    padding: 10px 0;
}
.selecter input {
    float: right;
    border-radius: 5px;
    width: 15%;
    text-align: center;
    border: none;
}

.selecter label {
    color: black;
}

.min {
    width: 30%;
    color: black;
    align-self: center;
}

.max {
    width: 30%;
    color: black;
    text-align: right;
    align-self: center;
}

.typeOfFood {

    padding: 10px 0;
    display: flex;
    flex-direction: column;
}

.typeOfFood input {
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    color: black;
    border: 1px solid black;
    padding-left: 5px;
}

.typeOfFood label {
    color: black;

}

.score-label {
    color: black;
}

.price-label {
    color: black;
}
#price {
		outline: 0;
		border: 0;
		border-radius: 20px;
        border: 1px solid black;
        height: 10px;
        align-self: center;
		// width: 100%;
		// margin: 24px 0;
		transition: box-shadow 0.2s ease-in-out;
        margin-right: auto;
        margin-left: auto;
		// Chrome
		@media screen and (-webkit-min-device-pixel-ratio:0) {
			& {
				overflow: hidden;
				// height: 40px;
				-webkit-appearance: none;
				background-color: white;
			}
			&::-webkit-slider-runnable-track {
				// height: 40px;
				-webkit-appearance: none;
				color: #444;
				margin-top: -1px;
				transition: box-shadow 0.2s ease-in-out;
			}
			&::-webkit-slider-thumb {
				width: 12px;
				-webkit-appearance: none;
				height: 12px;
				cursor: ew-resize;
				background: #fff;
				box-shadow: -340px 0 0 332px $base-color-focused, inset 0 0 0 40px $base-color-focused;
				border-radius: 50%;
				transition: box-shadow 0.2s ease-in-out;
				position: relative;
				// top: 1px;
			}
			&:active::-webkit-slider-thumb {
				background: #fff;
				box-shadow: -340px 0 0 332px $base-color-focused, inset 0 0 0 3px $base-color-focused;
			}
		}
		// Firefox
		&::-moz-range-progress {
			background-color: #43e5f7;
		}
		&::-moz-range-track {
			background-color: #9a905d;
		}
		// IE
		&::-ms-fill-lower {
			background-color: #43e5f7;
		}
		&::-ms-fill-upper {
			background-color: #9a905d;
		}
	}

#score {
		outline: 0;
		border: 0;
		border-radius: 20px;
        border: 1px solid black;
		// width: 100%;
        // margin: 24px 0;
        height: 10px;
        align-self: center;
		transition: box-shadow 0.2s ease-in-out;
        margin-right: auto;
        margin-left: auto;
		// Chrome
		@media screen and (-webkit-min-device-pixel-ratio:0) {
			& {
				overflow: hidden;
				// height: 40px;
				-webkit-appearance: none;
				background-color: white;
			}
			&::-webkit-slider-runnable-track {
				// height: 40px;
				-webkit-appearance: none;
				color: #444;
				margin-top: -1px;
				transition: box-shadow 0.2s ease-in-out;
			}
			&::-webkit-slider-thumb {
				width: 12px;
				-webkit-appearance: none;
				height: 12px;
				cursor: ew-resize;
				background: #fff;
				box-shadow: -340px 0 0 332px $base-color-focused, inset 0 0 0 40px $base-color-focused;
				border-radius: 50%;
				transition: box-shadow 0.2s ease-in-out;
				position: relative;
				// top: 1px;
			}
			&:active::-webkit-slider-thumb {
				background: #fff;
				box-shadow: -340px 0 0 332px $base-color-focused, inset 0 0 0 3px $base-color-focused;
			}
		}
		// Firefox
		&::-moz-range-progress {
			background-color: #43e5f7;
		}
		&::-moz-range-track {
			background-color: #9a905d;
		}
		// IE
		&::-ms-fill-lower {
			background-color: #43e5f7;
		}
		&::-ms-fill-upper {
			background-color: #9a905d;
		}
	}
</style>
