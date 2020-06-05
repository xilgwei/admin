<template>
    <el-card class="pl15 pr15">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button @click="handleSave" style="float: right; padding: 7px 15px" type="primary">保存</el-button>
        </div>

        <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
            <editor id="toolbar" slot="toolbar"></editor>
        </quill-editor>
    </el-card>
</template>

<script>
    import {quillEditor} from 'vue-quill-editor'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import editor from '../../components/editor/index'

    export default {
        name: 'FuncFormsEdit',
        components: {
            quillEditor,
            editor
        },
        data() {
            return {
                content: null,
                editorOption: {
                    placeholder: "请输入",
                    theme: "snow", // or 'bubble'
                    modules: {
                        toolbar: {
                            container: '#toolbar'
                        }
                    }
                }
            }
        },
        methods: {
            handleSave() {
                console.log(this.content)
            }
        }
    }
</script>

<style scoped>
</style>
