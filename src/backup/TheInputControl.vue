<template>
  <div id="control-panel">
    <BaseButton content="增加一组" @click.native="addRow" style="background: #94C35C"></BaseButton>
    <BaseButton content="删除一组" @click.native="removeRow" style="background:#DC6561;"></BaseButton>
    <button class="btn-spin"
            data-content-default="开始解题"
            data-content-spinning="稍等片刻">
    </button>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "TheInputControl",
  components: {BaseButton}
}
</script>

<style scoped>

</style>