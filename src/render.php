<?php

// use the get block wrapper attributes function to get the block wrapper props
$block_props = get_block_wrapper_attributes();

// taken from the 'attributes' property in block.json
$starting_year = $attributes['startingYear'];
// the PHP date() function outputs the current year.
$current_year = date( 'Y' );
?>

<!-- output the paragraph tag including the relevant content.-->
<p <?php echo $block_props; ?>>
  <!-- ensure that the block properties are applied to the paragraph tag -->
  Copyright &copy; <?php echo $starting_year ?> - <?php echo $current_year; ?>
</p>