<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="grid-content">
          <h4 class="box-title">Basic</h4>
          <p>For basic styling—light padding and only horizontal dividers—add the base class <code>.table</code> to any <code>&lt;table&gt;</code>. It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.</p>
          <div class="tit">Optional table caption.</div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="xh"
              label="#"
              width="180">
            </el-table-column>
            <el-table-column
              prop="first"
              label="FirstName"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="last"
              label="LastName">
            </el-table-column>
            <el-table-column
              prop="user"
              label="UserName">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <h4 class="box-title">Basic</h4>
          <p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code></p>
          <div class="tit">Optional table caption.</div>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="xh"
              label="#"
              width="180">
            </el-table-column>
            <el-table-column
              prop="first"
              label="FirstName"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="last"
              label="LastName">
            </el-table-column>
            <el-table-column
              prop="user"
              label="UserName">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="grid-content">
          <h4 class="box-title">Bordered table</h4>
          <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
          <div class="tit">Optional table caption.</div>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="xh"
              label="#"
              width="180">
            </el-table-column>
            <el-table-column
              prop="first"
              label="FirstName"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="last"
              label="LastName">
            </el-table-column>
            <el-table-column
              prop="user"
              label="UserName">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <h4 class="box-title">Contextual classes</h4>
          <p>Use contextual classes to color table rows or individual cells.</p>
          <el-table
            :data="tableData"
            :row-class-name="tableRowClassName"
            style="width: 100%">
            <el-table-column
              prop="xh"
              label="#"
              width="180">
            </el-table-column>
            <el-table-column
              prop="first"
              label="FirstName"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="last"
              label="LastName">
            </el-table-column>
            <el-table-column
              prop="user"
              label="UserName">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <div class="grid-content">
          <h4 class="box-title">Responsive tables</h4>
          <p>Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code> to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.</p>
          <div class="tit">Optional table caption.</div>
          <el-table
            :data="tableData1"
            style="width: 100%;margin-bottom: 20px">
            <el-table-column
              prop="xh"
              label="#"
              width="180">
            </el-table-column>
            <el-table-column
              prop="one"
              label="Table heading"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="two"
              label="Table heading">
            </el-table-column>
            <el-table-column
              prop="three"
              label="Table heading">
            </el-table-column>
            <el-table-column
              prop="four"
              label="Table heading"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="five"
              label="Table heading">
            </el-table-column>
            <el-table-column
              prop="six"
              label="Table heading">
            </el-table-column>
          </el-table>
          <el-table
            :data="tableData1"
            border
            style="width: 100%">
            <el-table-column
              prop="xh"
              label="#"
              width="180">
            </el-table-column>
            <el-table-column
              prop="one"
              label="Table heading"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="two"
              label="Table heading">
            </el-table-column>
            <el-table-column
              prop="three"
              label="Table heading">
            </el-table-column>
            <el-table-column
              prop="four"
              label="Table heading"
              width="FirstName">
            </el-table-column>
            <el-table-column
              prop="five"
              label="Table heading">
            </el-table-column>
            <el-table-column
              prop="six"
              label="Table heading">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
    export default {
      name: "BasicTables",
      data(){
        return{
          tableData:[
            {xh:'1',first:'Mark',last:'Otto',user:'@mdo'},
            {xh:'2',first:'Jacob',last:'Thornton',user:'@fat'},
            {xh:'3',first:'Larry',last:'the Bird',user:'@twitter'}
          ],
          tableData1:[
            {xh:'1',one:'Table cell',two:'Table cell',three:'Table cell',four:'Table cell',five:'Table cell',six:'Table cell'},
            {xh:'2',one:'Table cell',two:'Table cell',three:'Table cell',four:'Table cell',five:'Table cell',six:'Table cell'},
            {xh:'3',one:'Table cell',two:'Table cell',three:'Table cell',four:'Table cell',five:'Table cell',six:'Table cell'},
          ]
        }
      },
      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'success-row';
          } else if (rowIndex === 2) {
            return 'info-row';
          }else if (rowIndex === 3) {
            return 'warning-row';
          }
          return '';
        }
      },
    }
</script>

<style lang="scss" scoped>


  .el-table .success-row {
    background: #00bf4f;
  }
  .el-table .info-row {
    background: #00aeff;
  }
  .el-table .warning-row {
    background: #fbbc05;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    background-color: #ffffff;
    border: 1px solid #e6ebf5;
    border-radius: 4px;
  }
  .grid-content {
    padding: 20px 15px;
    height: 400px;
    border-radius: 4px;

  }
  .box-title{
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 900;
  }
  p{
    margin-bottom: 10px;
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
  }

  .tit{
    color: #777;
    padding: 10px 0;
  }
</style>
